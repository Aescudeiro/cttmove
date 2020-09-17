import React from "react";
import "./PasswordPopup.css";
import { FaTimes } from "react-icons/fa";

const PasswordPopup = (props) => {

  return (
    <>
      <div className="iban-popup-container">
        <div className="top-section">
          <h1>Alteração de Password</h1>
          <FaTimes size={25} onClick={props.handleClick} id="close-icon" />
        </div>

        <div className="fields">
          <h5>Password Actual</h5>
          <input placeholder="6+ caracteres" type="text"></input>
          <h5>Nova Password</h5>
          <input placeholder="6+ caracteres" type="text"></input>
          <div className="save-button">
            <button>Guardar</button>
          </div>
        </div>
      </div>

      <div className="lighter-background" onClick={props.handleClick}></div>
    </>
  );
};

export default PasswordPopup;
