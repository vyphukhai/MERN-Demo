import React from "react";
import "./style.css";

/**
 * @author
 * @function Card
 **/

const Card = (props) => {
  return (
    <div className="card" {...props}>
      {(props.headerLeft || props.headerRight) && (
        <div className="cardHeader">
          {props.headerLeft && <div> Oder ID: {props.headerLeft}</div>}
          {props.headerRight && props.headerRight}
        </div>
      )}

      {props.children}
    </div>
  );
};

export default Card;