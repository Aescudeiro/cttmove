import React, { useState } from "react";
import "./PedirReembolso.css";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

//components
import FlightDetails from "../../../Components/FlightDetails/FlightDetails.jsx";
import FileUpload from "../../../Components/FlightDetails/Steps/FileUpload.jsx";
import PaymentMethod from "../../../Components/FlightDetails/Steps/PaymentMethod.jsx";

const PedirReembolso = () => {
  const [step, setStep] = useState(1);

  const handleClick = () => {
    setStep(step + 1);
  };

  const goBack = () => {
    setStep(step - 1);
  };

  const ChooseStep = (step) => {
    switch (step) {
      case 1:
        return <FlightDetails />;
      case 2:
        return <FileUpload />;
      case 3:
        return <PaymentMethod />;
    }
  };

  return (
    <>
      <div className="refund-container">
        <h1 className="title">Pedir Reembolso</h1>
        <p>
          Por favor preencha todos os campos correctamente. Em caso de erro,
          contacte-nos na secção de Ajuda.
        </p>
      </div>
      {ChooseStep(step)}
      <div
        className="buttons-container"
        style={{ justifyContent: step === 1 ? "flex-end" : null }}
      >
        <button
          onClick={goBack}
          style={{ display: step === 1 ? "none" : null }}
        >
          <FaAngleLeft /> anterior
        </button>
        <button id="proximo-button" onClick={handleClick}>
          próximo <FaAngleRight />
        </button>
      </div>
    </>
  );
};
export default PedirReembolso;
