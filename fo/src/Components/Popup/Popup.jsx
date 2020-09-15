import React from "react";
import "./Popup.css";


const Popup = (props) => {
    return (
        <>
            <div className="popup">
                <div className="popup-container">
                    <p>{props.message}</p>
                    <button onClick={props.handleClick}>Não</button>
                    <button onClick={props.shut}>Sim</button>
                </div>

            </div>
            <div className="background"></div>
        </>
    )
}


export default Popup;
