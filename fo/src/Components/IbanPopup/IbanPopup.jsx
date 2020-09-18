import React from "react";
import "./IbanPopup.css";
import { FaTimes } from "react-icons/fa";

const Popup = (props) => {
  return (
    <>
      <div className="iban-popup-container">
        <div className="top-section">
          <h1>Alteração de IBAN</h1>
          <FaTimes size={25} onClick={props.handleClick} id="close-icon" />
        </div>

        <div className="fields">
          <h5>Novo Iban</h5>
          <input placeholder="PT50" type="text"></input>
          <h5>Comprovativo</h5>

          <div className="choose-file">
            <button>Escolher Ficheiro</button>
            <p id="info">{"Nenhum Ficheiro Seleccionado."}</p>
          </div>
          <div className="save-button">
            <button>Guardar</button>
          </div>
        </div>
      </div>

      <div className="lighter-background" onClick={props.handleClick}></div>
    </>
  );
};

export default Popup;
