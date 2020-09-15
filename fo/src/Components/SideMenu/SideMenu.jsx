import React, {useState} from "react";
import "./SideMenu.css";
import cttLogo from "../../Assets/logo-ctt.png";
import { Link } from "react-router-dom";
import $ from "jquery";
import { FaPowerOff } from 'react-icons/fa';
import Popup from "../Popup/Popup";

const SideMenu = (props) => {

  return (
    <div className="side-menu">
      <div className="side-menu-options">
        <img src={cttLogo}></img>
        <ul id="list">
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/pedirreembolso">Pedir Reembolso</Link>
          </li>
          <li>
            <Link to="/definicoes">Definições</Link>
          </li>
          <li>
            <Link to="/historico">Histórico</Link>
          </li>
          <li>
            <Link to="/ajuda">Ajuda</Link>
          </li>
        </ul>
      </div>
      <div className="bottom-options">

        {/* <Link to="/ajuda">Live Chat</Link> */}
        <button id="logout-button" onClick={props.handleClick}><FaPowerOff /> Sair</button>
      </div>
    </div>
  );
};

export default SideMenu;
