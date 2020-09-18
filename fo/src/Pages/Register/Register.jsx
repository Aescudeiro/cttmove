import React, { useState, useRef } from "react";
import "./Register.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import $ from "jquery";

import AuthService from "../../services/auth-service";

const required = (value) => {
  if (!value) {
    return (
      <h6 className="alert alert-danger" role="alert">Campo Obrigatório.</h6>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return <h6>Email inválido.</h6>;
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return <h6>A password deve conter entre 6 e 40 caracteres.</h6>;
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [nif, setNif] = useState("");
  const [ccNumber, setCCNumber] = useState("");
  const [taxAddress, setTaxAddress] = useState("");
  const [postCode, setPostCode] = useState("");
  const [location, setLocation] = useState("");
  const [message, setMessage] = useState("");
  const [hide, setHide] = useState(false)
  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(
        fullName,
        email,
        password,
        birthDate,
        nif,
        ccNumber,
        taxAddress,
        postCode,
        location
      ).then(
        (response) => {
          setMessage(response.data.message);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
        }
      );
    }
  };

  const handleClick = () =>{
    $('.register-form').addClass("hide");
  }

  return (
    <div className="register-container">
     <div className="pic"></div>
      <div className="register-form">
        <Form onSubmit={handleRegister} ref={form}>
          <h1>Criar Conta</h1>
          <p id="subtitle">
            Registe-se e descubra as vantagens que os CTT move lhe podem
            oferecer.
          </p>
          <button id="gov-button">AUTENTICAÇÃO.GOV</button>
 
            <div>
              <label htmlFor="fullName">Nome Completo</label>
              <Input
                type="text"
                name="fullName"
                value={fullName}
                onChange={(e) => onChange(e, setFullName)}
                validations={[required]}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                name="email"
                value={email}
                onChange={(e) => onChange(e, setEmail)}
                validations={[required, validEmail]}
              />
            </div>

            <div>
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e, setPassword)}
                validations={[required, vpassword]}
              />
            </div>

            <div>
              <button id="continuar-button" onClick={() => setHide(true)}>Continuar</button>
            </div>
          {message}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </div>
  );
};

export default Register;

{
  /* <div>
          <label htmlFor="birthDate">Data de nascimento</label>
          <Input
            type="text"
            name="birthDate"
            value={birthDate}
            onChange={(e) => onChange(e, setBirthDate)}
            validations={[required]}
          />
        </div>

        <div>
          <label htmlFor="nif">NIF</label>
          <Input
            type="text"
            name="nif"
            value={nif}
            onChange={(e) => onChange(e, setNif)}
            validations={[required]}
          />
        </div>

        <div>
          <label htmlFor="ccNumber">Nº Cartão de Cidadão</label>
          <Input
            type="text"
            name="ccNumber"
            value={ccNumber}
            onChange={(e) => onChange(e, setCCNumber)}
            validations={[required]}
          />
        </div>

        <div>
          <label htmlFor="taxAddress">Morada Fiscal</label>
          <Input
            type="text"
            name="taxAddress"
            value={taxAddress}
            onChange={(e) => onChange(e, setTaxAddress)}
            validations={[required]}
          />
        </div>

        <div>
          <label htmlFor="postCode">Código Postal</label>
          <Input
            type="text"
            name="postCode"
            value={postCode}
            onChange={(e) => onChange(e, setPostCode)}
            validations={[required]}
          />
        </div>

        <div>
          <label htmlFor="location">Localidade</label>
          <Input
            type="text"
            name="location"
            value={location}
            onChange={(e) => onChange(e, setLocation)}
            validations={[required]}
          />
        </div> */
}
