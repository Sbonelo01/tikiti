import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar nav-bar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img width={100} src={logo} alt="store" className="navbar-brand" />
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
            class="rounded-circle"
            style={{ width: "40px" }}
            alt="Avatar"
          />
        </Link>
      </NavWrapper>
    );
  }
}
const NavWrapper = styled.nav`
  background: #f5f5f5;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3 rem;
    text-transform: capitalize;
  }
`;
