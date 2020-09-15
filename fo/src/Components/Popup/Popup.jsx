import React from "react";
import "./Popup.css";
import { FaTimes } from "react-icons/fa";

const Popup = (props) => {
  return (
    <>
      <div className="popup-container">
        <a id="close" onClick={props.handleClick}>
          <FaTimes size={25} />
        </a>
        <p>{props.message}</p>
        <button onClick={props.shut}>Sim</button>
      </div>
      <div className="background" onClick={props.handleClick}></div>
    </>
  );
};

export default Popup;
