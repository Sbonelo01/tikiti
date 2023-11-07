import React, { Component } from "react";
// import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;

    return (
      // <ProducrWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      //   <div className="card">
      //     <ProductConsumer>
      //       {(value) => (
      //         <div
      //           className="img-container p-5"
      //           onClick={() => value.handleDetail(id)}
      //         >
      //           <Link to="/details">
      //             <img src={img} alt="product" className="card-img-top" />
      //           </Link>
      //           <button
      //             className="cart-btn"
      //             disabled={inCart ? true : false}
      //             onClick={() => {
      //               value.addToCart(id);
      //               value.openModal(id);
      //             }}
      //           >
      //             {inCart ? (
      //               <Link to="/cart">
      //                 <p className="text-capitalize mb-0" disabled>
      //                   {""}pay
      //                 </p>
      //               </Link>
      //             ) : (
      //               <i className="fas fa-shopping-cart" />
      //             )}
      //           </button>
      //         </div>
      //       )}
      //     </ProductConsumer>
      //     <div className="card-footer d-flex justify-content-between">
      //       <p className="align-self-center mb-0">{title}</p>
      //       <h5 className="mb-0">
      //         <span className="mr-1">R</span>
      //         {price}
      //       </h5>
      //     </div>
      //   </div>
      // </ProducrWrapper>
      <>
        <div className="card w-96 glass">
          <ProductConsumer>
            {(value) => {
              return (
                <>
                  {/* {console.log(value.detailProduct.info)} */}

                  <figure>
                    <Link to="/details">
                      <div onClick={() => value.handleDetail(id)}>
                        <img src={img} alt={`${img}${title}`} />
                      </div>
                    </Link>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{value.detailProduct.info.slice(0, 20)}</p>
                    <div className="card-actions justify-end">
                      <button
                        className={
                          inCart ? "btn btn-secondary" : "btn btn-primary"
                        }
                        onClick={() => {
                          value.addToCart(id);
                          value.openModal(id);
                        }}
                      >
                        Get ticket for {price}
                      </button>
                    </div>
                  </div>
                </>
              );
            }}
          </ProductConsumer>
        </div>
      </>
    );
  }
}
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
// const ProducrWrapper = styled.div`
//   .card {
//     border-color: tranparent;
//     transition: all 1s linear;
//     border-radius: 15px;
//   }
//   .card-footer {
//     background: transparent;
//     border-top: transparent;
//     transition: all 1s linear;
//   }
//   &:hover {
//     .card {
//       border: 0.04rem solid rgba(0, 0, 0, 0.2);
//       box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
//     }
//     .card-footer {
//       background: rgba(247, 247, 247);
//       border-radius: 0px 0px 15px 15px;
//     }
//   }
//   .img-container {
//     position: relative;
//     overflow: hidden;
//   }
//   .card-img-top {
//     transition: all 1s linear;
//   }
//   .img-container:hover .card-img-top {
//     transform: scale(1.2);
//   }
//   .cart-btn {
//     position: absolute;
//     bottom: 0;
//     right: 0;
//     border-radius: 50%;
//     padding: 0.2rem 0.4rem;
//     background: var(--lightBlue);
//     border: 0.1px solid transparent;
//     box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
//     color: var(--mainWhite);
//     font-size: 1.4rem;
//     transition: all 1s linear;
//   }
//   .img-container:hover .cart-btn {
//     transform: translate(0, 0);
//   }
//   .cart-btn:hover {
//     color: var(--mainBlue);
//     cursor: pointer;
//   }
// `;
