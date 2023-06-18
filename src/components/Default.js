import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Default extends Component {
  render() {
    console.log(this.props);
    if (this.props.location.pathname === "/profile") {
      return (
        <div style={{ display: "relative" }}>
          <NoProfilePage />
        </div>
      );
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1>error</h1>
            <h1 className="display-3">404</h1>
            <h2>page not found</h2>
            <h3>
              the requested URL
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              {""}
              was not found
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

function NoProfilePage() {
  return (
    <div style={{ position: "absolute", right: 90, bottom: "50%" }}>
      Profile page coming soon! <Link to="/">Go back</Link>
    </div>
  );
}
