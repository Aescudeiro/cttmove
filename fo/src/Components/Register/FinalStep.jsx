import React from "react";
import "./FinalStep.css";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const FinalStep = (props) => {
  return (
    <div className="final-step-container">
      <FaCheck size={70} color={"#49BF9C"} />
      <h2>Registo efectuado com sucesso!</h2>
      <h5>Por favor confira o seu email para confimar o registo.</h5>

      <button id="voltar-button">
        <Link to="/">Voltar ao Início</Link>
      </button>
    </div>
  );
};

export default FinalStep;
