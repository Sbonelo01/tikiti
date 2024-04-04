import React from "react";
import CryptoJS from "crypto-js";

export default function CartTotals({ value, getStoredCart }) {
  const { cartSubTotal, cartTax, cartTotal } = value;
  const myPassphrase = "jt7NOE43FZPn";

  // Generate signature function
  const generateSignature = (data, passPhrase = null) => {
    let pfOutput = "";
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        let value = data[key];
        if (typeof value === "string") {
          value = value.trim();
        }
        if (value !== "") {
          pfOutput += `${key}=${encodeURIComponent(value).replace(
            /%20/g,
            "+"
          )}&`;
        }
      }
    }

    // Remove last ampersand
    let getString = pfOutput.slice(0, -1);
    if (passPhrase !== null) {
      let passphraseValue = passPhrase.trim();
      getString += `&passphrase=${encodeURIComponent(passphraseValue).replace(
        /%20/g,
        "+"
      )}`;
    }

    return CryptoJS.MD5(getString).toString();
  };

  // Merchant details
  const merchantDetails = {
    merchant_id: "10000100",
    merchant_key: "46f0cd694581a",
    return_url: "https://tikiti-backend.onrender.com/success",
    cancel_url: "https://tikiti-backend.onrender.com/cancel",
    notify_url: "https://tikiti-backend.onrender.com/notify",
    name_first: "First Name",
    name_last: "Last Name",
    email_address: "test@test.com",
    m_payment_id: "1234",
    amount: cartTotal,
    item_name: "Order#123",
  };

  merchantDetails.signature = generateSignature(merchantDetails, myPassphrase);

  const pfHost = "sandbox.payfast.co.za"; // for testing purposes

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>{cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>{cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>{cartTotal}</strong>
            </h5>

            <form action={`https://${pfHost}/eng/process`} method="post">
              {Object.entries(merchantDetails).map(([key, value]) => (
                <input key={key} type="hidden" name={key} value={value} />
              ))}
              <input
                type="submit"
                className="btn btn-outline-success text-uppercase mb-3 px-5"
                value="Complete Payment"
              />
            </form>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}
