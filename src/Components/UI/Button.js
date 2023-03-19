import React from "react";
// import "./Button.scss";

const Button = function (props) {
  return (
    <button className="btn" type={props.type} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
