import React from "react";
import "./Popup.css";
/* import { FaTimes } from "react-icons/fa";
 */
const Popup = (props) => {
  return (
    <>
      <div className="popup-container">
        {/* <FaTimes id="close" size={25} /> */}
        <p>{props.message}</p>
        <button onClick={props.handleClick}>Não</button>
        <button onClick={props.shut}>Sim</button>
      </div>
      <div className="background" onClick={props.handleClick}></div>
    </>
  );
};

export default Popup;
