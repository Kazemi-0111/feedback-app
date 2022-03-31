import React from "react";
import { PropTypes } from "prop-types";
export default function Card({ children, reverse }) {
  //   return <div className={`card ${reverse && `reverse`}`}>{children}</div>;
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,.4)" : "#fff",
        color: reverse ? "#fff" : "rgba(0,0,0)",
      }}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  reverse: false,
};

Card.protoType = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};
