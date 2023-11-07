import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
import Footer from "./Footer";
import DesktopFooter from "./DesktopFooter";
import { isMobile } from "react-device-detect";
import Hero from "./Hero";

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
      gridTemplateColumns: "100%",
      gridColumnGap: "28%",
      gridRowGap: "28px",
    };
    // const product = {};
    return (
      <React.Fragment>
        <div className="py-5">
          {/* <Hero /> */}
          <div className="container">
            <Title name="" title="Tickets" />
            <div>
              <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                  <img
                    src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                  <img
                    src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                  <img
                    src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                  <img
                    src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                    className="w-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                      ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                      ❯
                    </a>
                  </div>
                </div>
              </div>
            </div>
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
          {isMobile ? <Footer /> : <DesktopFooter />}
        </div>
      </React.Fragment>
    );
  }
}
