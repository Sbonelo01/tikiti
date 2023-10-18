import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";

import { isMobile } from "react-device-detect";

import { ProductConsumer } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img
            width={isMobile ? 50 : 100}
            src={logo}
            alt="store"
            className="navbar-brand"
          />
        </Link>
        <Link to="/cart">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto auto",
              padding: "60px",
            }}
          >
            <div>
              <i className="fas fa-cart-plus"></i>
            </div>
            <ProductConsumer>
              {(amount) => {
                return (
                  <div style={{ paddingLeft: "10px" }}>
                    <p>{`R ${amount.cartTotal}`}</p>
                  </div>
                );
              }}
            </ProductConsumer>
          </div>
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainWhite);
  width: 100%;
  top: 0;
  position: fixed;
  border-top: 0px solid gray;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 100px;
  z-index: 5;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3 rem;
    text-transform: capitalize;
  }
`;
