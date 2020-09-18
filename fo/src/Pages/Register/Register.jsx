import React, { useState, useRef } from "react";
import "./Register.css";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { Link } from "react-router-dom";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import $ from "jquery";

import AuthService from "../../services/auth-service";
import { Step } from "@material-ui/core";
import button from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <h6 className="alert alert-danger" role="alert">Campo Obrigatório.</h6>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    $("#continuar-button").attr("disabled")
    return <h6>Email inválido.</h6>;
  }
  $("#continuar-button").removeAttr("disabled")
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    $("#continuar-button").attr("disabled")
    return <h6>A password deve conter entre 6 e 40 caracteres.</h6>;
  }
  $("#continuar-button").removeAttr("disabled")
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
  const [show, setShow] = useState("step1")
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

    setShow("step4")
  };

  const handleClick = (e) => {
    e.preventDefault()
    if (show === "step1") {
      if (!email || !password) return;
      setShow("step2")
    } else if (show === "step2") {
      if (!fullName || !birthDate || !nif || !ccNumber) return;
      setShow("step3")
    } else if (show === "step3") {
      if (!taxAddress || !postCode || !location) return;
      setShow("step4")
    }
  }

  return (
    <div className="register-container">

      <div className="picture"></div>


      <div className="register-form">
        <Form ref={form} id="form" >
          <div style={{ display: show === "step4" ? "none" : null }}>
            <h1>Criar Conta</h1>
            <p id="subtitle">
              Registe-se e descubra as vantagens que os CTT move lhe podem
              oferecer.
          </p>
            <button id="gov-button">AUTENTICAÇÃO.GOV</button>
          </div>

          <div id="step1" style={{ display: show === "step1" ? null : "none" }}>
            <h5>STEP 1/3</h5>

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

          </div>

          <div id="step2" style={{ display: show === "step2" ? null : "none" }}>
            <h5>STEP 2/3</h5>
            <div>
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

              <label htmlFor="birthDate">Data de nascimento</label>
              <Input
                type="text"
                name="birthDate"
                value={birthDate}
                onChange={(e) => onChange(e, setBirthDate)}
                validations={[required]}
              />
            </div>
            <div id="nif-and-cc-container">
              <div id="nif">
                <label htmlFor="nif">NIF</label>
                <Input
                  type="text"
                  name="nif"
                  value={nif}
                  onChange={(e) => onChange(e, setNif)}
                  validations={[required]}
                />
              </div>

              <div id="cc">
                <label htmlFor="ccNumber">Nº Cartão de Cidadão</label>
                <Input
                  type="text"
                  name="ccNumber"
                  value={ccNumber}
                  onChange={(e) => onChange(e, setCCNumber)}
                  validations={[required]}
                />
              </div>
            </div>


          </div>


          <div id="step3" style={{ display: show === "step3" ? null : "none" }}>
            <h5>STEP 3/3</h5>

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
            </div>


          </div>
          <div id="step4" style={{ display: show === "step4" ? null : "none" }}>
            <div className="final-step-container">
              <FaCheck size={70} color={"#49BF9C"} />
              <h2>Registo efectuado com sucesso!</h2>
              <h5>Por favor confira o seu email para confimar o registo.</h5>

              <button type="button" id="voltar-button">
                <Link to="/">Voltar ao Início</Link>
              </button>
            </div>
          </div>

          {show !== "step3" && show !== "step4" ?
            <button id="continuar-button" onClick={(e) => handleClick(e)} disabled={true}>Continuar<FaChevronRight /></button>
            : show === "step4" ?
              null
              :
              <button id="completar-button" onClick={(e) => { handleRegister(e) }}>Completar Registo<FaChevronRight /></button>
          }

          <div className="bottom-text" style={{ display: show === "step4" ? "none" : null }}>
            <p>Já tem conta?<span>
              <Link to="/login">

                Entre aqui.
               </Link>
            </span></p>
          </div>


          {message}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>

      </div>

    </div >
  );
};

export default Register;

{
  /* <div>
  
 */
}
