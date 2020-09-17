import React from "react";
import "./DadosDoUsuário.css";

import AuthService from "../../services/auth-service"

const DadosDoUsuário = () => {

  const user = AuthService.getCurrentUser()

  return <div>
    <form id="dados">
      <label>Nome Completo</label>
      <input value={user.fullName}></input>

      <label>Data de Nascimento</label>
      <input value={user.birthDate}></input>

      <label>Morada Fiscal</label>
      <input value={user.taxAddress}></input>

      <label >Código Postal</label>
      <input id="zip-code" value={user.postCode}></input>

      <label>Localidade</label>
      <input value={user.location}></input>

      <label>NIF</label>
      <input value={user.nif}></input>

      <label>Nº Cartão de Cidadão</label>
      <input value={user.ccNumber}></input>
    </form>
  </div>;
};

export default DadosDoUsuário;
