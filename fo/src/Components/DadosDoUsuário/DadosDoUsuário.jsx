import React from "react";
import "./DadosDoUsuário.css";

import AuthService from "../../services/auth-service"

const DadosDoUsuário = () => {

  const user = AuthService.getCurrentUser()

  return (
    <form id="form-container">
      <label className="label">Nome Completo</label>
      <input type="text" value={user.fullName}></input>

      <label className="label">Data de Nascimento</label>
      <input type="text" value={user.birthDate}></input>

      <label className="label">Morada Fiscal</label>
      <input type="text" value={user.taxAddress}></input>

      <div className="inputs-xs">
        <div className="label">
          <label>Código Postal</label>
          <input type="text" value={user.postCode}></input>
        </div>
        <div className="label">
          <label >Localidade</label>
          <input type="text" value={user.location}></input>
        </div>
        <div className="label">
          <label>NIF</label>
          <input type="text" value={user.nif}></input>
        </div>
        <div className="label">
          <label >Nº Cartão de Cidadão</label>
          <input type="text" value={user.ccNumber}></input>
        </div>
        <div id="button-container">
        <button>Guardar</button>
        </div>
      </div>
      
    </form>
  )
};

export default DadosDoUsuário;
