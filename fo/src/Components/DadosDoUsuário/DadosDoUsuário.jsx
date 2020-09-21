import React, { useState } from "react";
import "./DadosDoUsuário.css";

import AuthService from "../../services/auth-service";

const DadosDoUsuário = () => {
  const user = AuthService.getCurrentUser();

  const [fullName, setFullName] = useState(
    AuthService.getCurrentUser().fullName
  );
  const [email, setEmail] = useState(AuthService.getCurrentUser().email);
  const [birthDate, setBirthDate] = useState(
    AuthService.getCurrentUser().birthDate
  );
  const [nif, setNif] = useState(AuthService.getCurrentUser().nif);
  const [ccNumber, setCCNumber] = useState(
    AuthService.getCurrentUser().ccNumber
  );
  const [taxAddress, setTaxAddress] = useState(
    AuthService.getCurrentUser().taxAddress
  );
  const [postCode, setPostCode] = useState(
    AuthService.getCurrentUser().postCode
  );
  const [location, setLocation] = useState(
    AuthService.getCurrentUser().locality
  );
  const [message, setMessage] = useState("");

  const onChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    AuthService.update(
      fullName,
      email,
      birthDate,
      nif,
      ccNumber,
      taxAddress,
      postCode,
      location
    );
  };

  return (
    <form id="form-container">
      <label className="label">Nome Completo</label>
      <input
        type="text"
        value={user.fullName}
        onChange={(e) => onChange(e, setFullName)}
      ></input>

      <label className="label">Data de Nascimento</label>
      <input
        type="text"
        value={user.birthDate}
        onChange={(e) => onChange(e, setBirthDate)}
      ></input>

      <label className="label">Morada Fiscal</label>
      <input
        type="text"
        value={user.taxAddress}
        onChange={(e) => onChange(e, setTaxAddress)}
      ></input>

      <div className="inputs-xs">
        <div className="label">
          <label>Código Postal</label>
          <input
            type="text"
            value={user.postCode}
            onChange={(e) => onChange(e, setPostCode)}
          ></input>
        </div>
        <div className="label">
          <label>Localidade</label>
          <input
            type="text"
            value={user.locality}
            onChange={(e) => onChange(e, setLocation)}
          ></input>
        </div>
        <div className="label">
          <label>NIF</label>
          <input
            type="text"
            value={user.nif}
            onChange={(e) => onChange(e, setNif)}
          ></input>
        </div>
        <div className="label">
          <label>Nº Cartão de Cidadão</label>
          <input
            type="text"
            value={user.ccNumber}
            onChange={(e) => onChange(e, setCCNumber)}
          ></input>
        </div>
        <div id="button-container">
          <button onSubmit={(e) => handleUpdate(e)}>Guardar</button>
        </div>
      </div>
    </form>
  );
};

export default DadosDoUsuário;
