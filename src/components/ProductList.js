import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Footer from "./Footer";
import { isMobile } from "react-device-detect";

export default class ProductList extends Component {
  render() {
    const parentDesktop = {
      display: "grid",
      gridTemplateColumns: "100px 100px 100px",
      gridColumnGap: "28%",
      gridRowGap: "28px",
    };
    const parentPhone = {
      display: "grid",
      gridTemplateColumns: "100px",
      gridColumnGap: "28%",
      gridRowGap: "28px",
    };
    // const product = {};
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="" title="Tickets" />

            <div style={isMobile ? parentPhone : parentDesktop}>
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return (
                      <div>
                        <Product key={product.id} product={product} />
                      </div>
                    );
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
          <br />
          {isMobile ? <Footer /> : ""}
        </div>
      </React.Fragment>
    );
  }
}
