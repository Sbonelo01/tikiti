import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
// import { ButtonContainer } from "./Button";
import { isMobile } from "react-device-detect";

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
        <ul className="navbar-nav align-items-center">
          {/* <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              tikiti
            </Link>
          </li> */}
        </ul>
        <Link to="/profile" className="ml-auto">
          {/* <ButtonContainer> */}
          {/* <i className="fas fa-cart-plus">my cart</i> */}
          {/* </ButtonContainer> */}
          <img
            src="https://img.myloview.com/posters/social-media-user-icon-vector-default-avatar-profile-image-400-251200035.jpg"
            className="rounded-circle"
            style={{ width: isMobile ? "20px" : "40px" }}
            alt="Avatar"
          />
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: var(--mainWhite);
  width: 100%;
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
