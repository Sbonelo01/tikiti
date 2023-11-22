import React from "react";
// import { Link } from "react-router-dom";

export default function CartTotals({ value, getStoredCart }) {
  // const {clearCart} = value
  const { cartSubTotal, cartTax, cartTotal } = value;
  console.log("inside cart totals", getStoredCart);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            {/* <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                type="button"
                onClick={() => {
                  clearCart();
                }}
              >
                clear cart
              </button>
            </Link> */}
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>{cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>{cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>{cartTotal}</strong>
            </h5>

            <form
              action="https://sandbox.payfast.co.za​/eng/process"
              method="post"
            >
              <input type="hidden" name="merchant_id" value="10000100" />
              <input type="hidden" name="merchant_key" value="46f0cd694581a" />
              <input
                type="hidden"
                name="return_url"
                value="https://tikiti-backend.onrender.com/success"
              />
              <input
                type="hidden"
                name="cancel_url"
                value="https://tikiti-backend.onrender.com/cancel"
              />
              <input
                type="hidden"
                name="notify_url"
                value="https://tikiti-backend.onrender.com/notify"
              />

              <input type="hidden" name="merchant_id" value="10000100" />
              <input type="hidden" name="merchant_key" value="46f0cd694581a" />
              <input type="hidden" name="amount" value={cartTotal} />
              <input type="hidden" name="item_name" value="Test Product" />
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
