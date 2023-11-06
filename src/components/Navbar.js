import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
// import styled from "styled-components";

import { isMobile } from "react-device-detect";

import { ProductConsumer } from "../context";

export default class Navbar extends Component {
  render() {
    return (
      // <NavWrapper class="navbar nav-bar-expand-sm navbar-dark px-sm-5">
      //   <Link to="/">
      //     <img
      //       width={isMobile ? 50 : 100}
      //       src={logo}
      //       alt="store"
      //       class="navbar-brand"
      //     />
      //   </Link>
      //   <Link to="/cart">
      //     <div
      //       style={{
      //         display: "grid",
      //         gridTemplateColumns: "auto auto",
      //         padding: "60px",
      //       }}
      //     >
      //       <div>
      //         <i class="fas fa-cart-plus"></i>
      //       </div>
      //       <ProductConsumer>
      //         {(amount) => {
      //           return (
      //             <div style={{ paddingLeft: "10px" }}>
      //               <p>{`R ${amount.cartTotal}`}</p>
      //             </div>
      //           );
      //         }}
      //       </ProductConsumer>
      //     </div>
      //   </Link>
      // </NavWrapper>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/">
            <img
              width={isMobile ? 50 : 100}
              src={logo}
              alt="store"
              class="navbar-brand"
            />
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <ProductConsumer>
              {(amount) => {
                // return <>{amount.cartTotal}</>;
                // }}
                return (
                  <>
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                      <div className="indicator">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        {/* {console.log(amount)} */}
                        <span className="badge badge-sm indicator-item">
                          {amount.cart.length}
                        </span>
                      </div>
                    </label>
                    <div
                      tabIndex={0}
                      className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
                    >
                      <div className="card-body">
                        <span className="font-bold text-lg">
                          {amount.cart.length} tickets
                        </span>
                        <span className="text-info">
                          Subtotal: {amount.cartTotal}
                        </span>
                        <div className="card-actions">
                          <Link to="/cart">
                            <button className="btn btn-primary btn-block">
                              View cart
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </>
                );
              }}
            </ProductConsumer>
          </div>

          {/* <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    );
  }
}
// const NavWrapper = styled.nav`
//   background: var(--mainWhite);
//   width: 100%;
//   top: 0;
//   position: fixed;
//   border-top: 0px solid gray;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//   margin-bottom: 100px;
//   z-index: 5;
//   .nav-link {
//     color: var(--mainWhite) !important;
//     font-size: 1.3 rem;
//     text-transform: capitalize;
//   }
// `;
