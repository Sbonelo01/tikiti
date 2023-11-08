import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="card w-96 bg-base-100 shadow-xl">
                  <div>
                    <h4>Added to cart</h4>
                  </div>
                  <figure>
                    <img src={img} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <h5 className="text-muted">price : R {price}</h5>
                    <div className="card-actions justify-end">
                      <Link to="/">
                        <button
                          onClick={() => closeModal()}
                          className="btn btn-outline btn-primary"
                        >
                          continue shoping
                        </button>
                      </Link>

                      <Link to="/cart">
                        <button
                          cart
                          onClick={() => closeModal()}
                          className="btn btn-outline btn-success"
                        >
                          complete purchase
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
