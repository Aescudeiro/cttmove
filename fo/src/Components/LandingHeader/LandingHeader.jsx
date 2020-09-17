import React from "react";
import { Link } from "react-router-dom";
import "./LandingHeader.css";
import cttLogo from "../../Assets/logo-ctt.png";

const LandingHeader = () => {
  return (
    <div className="landing-header">
      <img alt="" src={cttLogo}></img>
      <div className="links">
        <Link to="/login">Entrar</Link>
        <button>
          <Link to="/register" id="registar">
            Registar
          </Link>
        </button>
      </div>
    </div>
  );
};

export default LandingHeader;
