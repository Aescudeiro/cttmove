import React from "react";
import "./Register.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {FaChevronRight} from "react-icons/fa";

const Register = () => {
  return (<div className="register-container">
    <div className="picture"></div>
    <div className="form">
      <form>
        <Form>
          <h1>Criar Conta</h1>
          <h5>Registe-se e descubra as vantagens que os CTT move lhe podem oferecer.</h5>
          <button id="gov-button">AUTENTICAÇÃO GOV</button>
          <p>ou</p>
          <label htmlFor="email">Email</label>
          <Input
            placeHolder="nome@dominio.com"
            type="text"
            name="email"
          />

          <label htmlFor="password">Password</label>
          <Input
            placeHolder="6+ caracteres"
            type="password"
            name="password"
          />
            <label htmlFor="password">Repita a Password</label>
          <Input
            placeHolder="6+ caracteres"
            type="password"
            name="password"
          />
          <button id="continuar-button">continuar <FaChevronRight/></button>
          <p id="question">Já tem uma conta? <span>Entre aqui.</span></p>
        </Form>
      </form>
    </div>

  </div>)
};

export default Register;
