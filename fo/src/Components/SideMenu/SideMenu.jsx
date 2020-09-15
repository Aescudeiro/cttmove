import React from "react";
import "./SideMenu.css";
import cttLogo from "../../Assets/logo-ctt.png";
import { Link } from "react-router-dom";
import $ from "jquery";

const SideMenu = () => {

  return (
    <div className="side-menu">
      <div className="side-menu-options">
        <img src={cttLogo}></img>
        <ul id="list">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/pedirreembolso">Pedir Reembolso</Link></li>
          <li><Link to="/definicoes">Definições</Link></li>
          <li><Link to="/historico">Histórico</Link></li>
        </ul>
      </div>
      <div className="bottom-options">
        <Link to="/ajuda">Ajuda</Link>
        <Link to="/ajuda">Live Chat</Link>

      </div>
    </div>
  )
};

export default SideMenu;
