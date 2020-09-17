import React from "react";
import "./IbanPopup.css";
import { FaTimes } from "react-icons/fa";

const Popup = (props) => {
    return (
        <>

            <div className="iban-popup">
                <h1>Alteração de IBAN</h1>
                <FaTimes size={25} onClick={props.handleClick} />
                <div className="iban">
                    <h5>Novo Iban</h5>
                    <h5>Comprovativo</h5>
                    <button>Guardar</button>
                </div>

            </div>

            <div className="lighter-background" onClick={props.handleClick}></div>
        </>
    );
};

export default Popup;
