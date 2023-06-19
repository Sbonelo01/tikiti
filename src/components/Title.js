import React from "react";
import { isMobile } from "react-device-detect";

export default function Title({ name, title }) {
  return (
    <div className="row" style={{ marginTop: isMobile ? 40 : 80 }}>
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1
          className="text-capitalize font-weight-bold"
          style={{ paddingTop: 40 }}
        >
          {name} <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </div>
  );
}
