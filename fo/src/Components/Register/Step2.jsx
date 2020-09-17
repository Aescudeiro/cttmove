import React from "react";
import "./Step2.css";
import Input from "react-validation/build/input";
import { FaChevronRight } from "react-icons/fa";

const Step2 = (props) => {
  return (
    <div>
      <p>Step 2/3</p>
      <label htmlFor="nome">Nome Completo</label>
      <Input placeHolder="" type="text" name="nome" />
      <label htmlFor="date">Data de Nascimento</label>
      <Input placeHolder="DD/MM/AAAA" type="text" name="data de nascimento" />

      <div className="data">
        <div>
          <label htmlFor="nif">NIF</label>
          <Input placeHolder="9 caracteres" type="text" name="NIF" />
        </div>
        <div id="cc">
          <label htmlFor="CC">Nº Cartão de Cidadão</label>
          <Input placeHolder="8+ caracteres" type="text" name="CC" />
        </div>
      </div>
      <button id="continuar-button" onClick={props.handleClick}>
        continuar <FaChevronRight /> 
      </button>
    </div>
  );
};

export default Step2;
