import React, { Component } from "react";
import { Link } from "react-router-dom";
// import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Footer extends Component {
  render() {
    return (
      <FooterWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
        {/* <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              tikiti
            </Link>
          </li>
        </ul> */}
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <i className="fas fa-cart-plus"></i>

            {/* <i className="fas fa-cart-plus">my cart</i> */}
          </ButtonContainer>
        </Link>
      </FooterWrapper>
    );
  }
}

const FooterWrapper = styled.footer`
  background: #0acf83;
  bottom: 0;
  right: 0;
  width: 100%;
  position: fixed;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3 rem;
    text-transform: capitalize;
  }
`;
