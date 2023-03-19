import React from "react";
// import "./RateNumber.scss";

const RateNumber = function (props) {
  return (
    <li onClick={props.onClick} className={`rate-number ${props.className}`}>
      {props.numbers}
    </li>
  );
};

export default RateNumber;
