import React from "react";
// import "./WrapperCard.scss";

const WrapperCard = function (props) {
  return <div className="wrapper-card">{props.children}</div>;
};

export default WrapperCard;
