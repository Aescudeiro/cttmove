import React from "react";
import "./DadosDoUsuário.css";

import AuthService from "../../services/auth-service"

const DadosDoUsuário = () => {

  const user = AuthService.getCurrentUser()

  return (
    <form id="form-container">
      <label>Nome Completo</label>
      <input type="text" value={user.fullName}></input>

      <label>Data de Nascimento</label>
      <input type="text" value={user.birthDate}></input>

      <label>Morada Fiscal</label>
      <input type="text" value={user.taxAddress}></input>

      <div className="inputs-xs">
        <div>
          <label>Código Postal</label>
          <input type="text" value={user.postCode}></input>
        </div>
        <div id="location">
          <label>Localidade</label>
          <input type="text" value={user.location}></input>
        </div>
        <div>
          <label>NIF</label>
          <input type="text" value={user.nif}></input>
        </div>
        <div id="cc">
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
