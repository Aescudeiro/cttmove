import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="card">
      <div className="text-container">
        <div className="card-title">{props.title}</div>
        <div className="number">
          <h2>{props.number}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
