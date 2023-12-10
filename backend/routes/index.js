var express = require("express");
var router = express.Router();
const path = require("path");

const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/success", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "success.html"));
});

router.get("/cancel", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public", "cancel.html"));
});

router.get("/notify", function (req, res, next) {
  // console.log("REQ", req);
  // console.log("RES", res);

  // const axios = require("axios");
  // import axios from "https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm";
  const axios = require("axios");
  const crypto = require("crypto");
  // import crypto from "crypto";
  const dns = require("dns");
  // import dns from "dns";

  const testingMode = true;
  const pfHost = testingMode ? "sandbox.payfast.co.za" : "www.payfast.co.za";

  const pfData = JSON.parse(JSON.stringify(req.body));

  let pfParamString = "";
  for (let key in pfData) {
    if (pfData.hasOwnProperty(key) && key !== "signature") {
      pfParamString += `${key}=${encodeURIComponent(pfData[key].trim()).replace(
        /%20/g,
        "+"
      )}&`;
    }
  }

  // Remove last ampersand
  pfParamString = pfParamString.slice(0, -1);

  const pfValidSignature = (pfData, pfParamString, pfPassphrase = null) => {
    // Calculate security signature
    let tempParamString = "";
    if (pfPassphrase !== null) {
      pfParamString += `&passphrase=${encodeURIComponent(
        pfPassphrase.trim()
      ).replace(/%20/g, "+")}`;
    }

    const signature = crypto
      .createHash("md5")
      .update(pfParamString)
      .digest("hex");
    return pfData["signature"] === signature;
  };

  async function ipLookup(domain) {
    return new Promise((resolve, reject) => {
      dns.lookup(domain, { all: true }, (err, address, family) => {
        if (err) {
          reject(err);
        } else {
          const addressIps = address.map(function (item) {
            return item.address;
          });
          resolve(addressIps);
        }
      });
    });
  }

  const pfValidIP = async (req) => {
    const validHosts = [
      "www.payfast.co.za",
      "sandbox.payfast.co.za",
      "w1w.payfast.co.za",
      "w2w.payfast.co.za",
    ];

    let validIps = [];
    const pfIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    try {
      for (let key in validHosts) {
        const ips = await ipLookup(validHosts[key]);
        validIps = [...validIps, ...ips];
      }
    } catch (err) {
      console.error(err);
    }

    const uniqueIps = [...new Set(validIps)];

    if (uniqueIps.includes(pfIp)) {
      return true;
    }
    return false;
  };

  const pfValidPaymentData = (cartTotal, pfData) => {
    return (
      Math.abs(parseFloat(cartTotal) - parseFloat(pfData["amount_gross"])) <=
      0.01
    );
  };

  const pfValidServerConfirmation = async (pfHost, pfParamString) => {
    const result = await axios
      .post(`https://${pfHost}/eng/query/validate`, pfParamString)
      .then((res) => {
        return res.data;
      })
      .catch((error) => {
        console.error(error);
      });
    return result === "VALID";
  };

  const check1 = pfValidSignature(pfData, pfParamString, pfPassphrase);
  const check2 = pfValidIP(req);
  const check3 = pfValidPaymentData(cartTotal, pfData);
  const check4 = pfValidServerConfirmation(pfHost, pfParamString);

  if (check1 && check2 && check3 && check4) {
    // All checks have passed, the payment is successful
    console.log("success");
  } else {
    // Some checks have failed, check payment manually and log for investigation
    console.log("failed");
  }

  res.sendFile(path.join(__dirname, "../public", "notify.html"));
});

module.exports = router;
