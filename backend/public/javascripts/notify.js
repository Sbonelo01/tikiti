const axios = require("axios");
const crypto = require("crypto");
const dns = require('dns');

const testingMode = true;
const pfHost = testingMode ? "sandbox.payfast.co.za" : "www.payfast.co.za";

const pfData = JSON.parse(JSON.stringify(req.body));

let pfParamString = "";
for (let key in pfData) {
  if(pfData.hasOwnProperty(key) && key !== "signature"){
    pfParamString +=`${key}=${encodeURIComponent(pfData[key].trim()).replace(/%20/g, "+")}&`;
  }
}

// Remove last ampersand
pfParamString = pfParamString.slice(0, -1);
