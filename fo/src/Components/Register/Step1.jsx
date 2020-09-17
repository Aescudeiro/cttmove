import React from "react";
import "./Step1.css";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { FaChevronRight } from "react-icons/fa";

const Step1 = (props) => {

  return (
    <div>
      <p>Step 1/3</p>
      <label htmlFor="email">Email</label>
      <Input placeHolder="nome@dominio.com" type="text" name="email"/>

      <label htmlFor="password">Password</label>
      <Input placeHolder="6+ caracteres" type="password" name="password"/>

      <label htmlFor="password">Repita a Password</label>
      <Input placeHolder="6+ caracteres" type="password" name="password"/>

      <button id="continuar-button" onClick={props.handleClick}>
        continuar <FaChevronRight />
      </button>
    </div>
  );
};

export default Step1;
