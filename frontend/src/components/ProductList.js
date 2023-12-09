import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from "../context";
// import Footer from "./Footer";
import DesktopFooter from "./DesktopFooter";
import { isMobile } from "react-device-detect";
// import Carousel from "./Carousel/Carousel";

import image1 from "../img/pexels-alex-andrews-1983046.png";
import image2 from "../img/pexels-lukas-rodriguez-3473085.png";
import image3 from "../img/pexels-skylar-kang-6045132.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel/styles.css";
// import required modules
import { Pagination, Autoplay, Navigation } from "swiper/modules";

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
    const IMAGES = [image1, image2, image3];
    return (
      <React.Fragment>
        <div style={{ height: "75vh" }}>
          <>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 1,
                  spaceBetween: 50,
                },
              }}
              Navigation={true}
              modules={[Pagination, Autoplay, Navigation]}
              className="mySwiper"
            >
              {IMAGES.map((image) => {
                return (
                  <SwiperSlide>
                    <div>
                      <img
                        src={image}
                        alt={image}
                        style={
                          isMobile ? { height: "100vh" } : { height: "auto" }
                        }
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* <ProductConsumer>
                {(value) => {
                  const IMAGES = [];
                  value.products.forEach((product, index) => {
                    
                    return (
                      <SwiperSlide key={index}>
                        <div>
                          {console.log(product.img)}
                          <img src={`../${product.img}`} />
                        </div>
                      </SwiperSlide>
                    );
                  });

                  console.log("IMAGES", IMAGES);
                }}
              </ProductConsumer> */}
            </Swiper>
          </>
        </div>
        <div className="py-5">
          <div className="container">
            <Title name="Tickets" title="" />

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
          {/* {isMobile ? <Footer /> : <DesktopFooter />} */}
          <DesktopFooter />
        </div>
      </React.Fragment>
    );
  }
}
