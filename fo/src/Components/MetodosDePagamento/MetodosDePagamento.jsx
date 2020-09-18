import React, {useState} from "react";
import "./MetodosDePagamento.css";
import IbanPopup from "../../Components/IbanPopup/IbanPopup.jsx";

const MetodosDePagamento = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        setShowPopup(!showPopup);
    }

    return (
        <>
            <form id="form-container">
                <h2>Transferência Bancária</h2>
                <p className="description">Dependendo do seu banco, a transferência poderá demorar entre 1 a 3 dias úteis.</p>
                <div id="iban">
                    <h4>IBAN</h4>
                    <h4 id="alterar-iban" onClick={handleClick}>Alterar IBAN</h4>
                </div>
                <input></input>
                <hr></hr>
                <h2>Levantamento em numerário num balcão CTT</h2>
                <p className="description">Caso pretenda receber o reembolso em numerário, deverá levar o código que lhe é fornecido no acto do reembolso, a um balcão CTT.</p>
            </form>
            {showPopup ? <IbanPopup handleClick={handleClick} /> : null}
        </>
    )
};

export default MetodosDePagamento;