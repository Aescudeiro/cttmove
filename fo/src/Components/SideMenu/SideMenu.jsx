import React, { useState } from "react";
import "./SideMenu.css";
import cttLogo from "../../Assets/logo-ctt.png";
import { Link } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa";

const SideMenu = (props) => {
  const [pathName, setPathName] = useState(window.location.pathname);

  const HandleNavItemsClass = (path) => {
    if (pathName === path) {
      return `active`;
    }
    return ``;
  };

  return (
    <div className="side-menu">
      <div className="side-menu-options">
        <Link to="/" onClick={() => setPathName("/")}>
          <img alt="" src={cttLogo}></img>
        </Link>
        <ul id="list">
          <li>
            <Link
              to="/"
              onClick={() => setPathName("/")}
              className={HandleNavItemsClass("/")}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/pedirreembolso"
              onClick={() => setPathName("/pedirreembolso")}
              className={HandleNavItemsClass("/pedirreembolso")}
            >
              Pedir Reembolso
            </Link>
          </li>
          <li>
            <Link
              to="/definicoes"
              onClick={() => setPathName("/definicoes")}
              className={HandleNavItemsClass("/definicoes")}
            >
              Definições
            </Link>
          </li>
          <li>
            <Link
              to="/historico"
              onClick={() => setPathName("/historico")}
              className={HandleNavItemsClass("/historico")}
            >
              Histórico
            </Link>
          </li>
          <li>
            <Link
              to="/ajuda"
              onClick={() => setPathName("/ajuda")}
              className={HandleNavItemsClass("/ajuda")}
            >
              Ajuda
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom-options">
        {/* <Link to="/ajuda">Live Chat</Link> */}
        <button id="logout-button" onClick={props.handleClick}>
          <FaPowerOff id="icon" /> Sair
        </button>
      </div>
    </div>
  );
};

export default SideMenu;
