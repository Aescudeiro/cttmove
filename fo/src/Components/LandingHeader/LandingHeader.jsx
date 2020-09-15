import React from "react";
import "./LandingHeader.css";
import cttLogo from "../../Assets/logo-ctt.png";

const LandingHeader = () => {
  return <div className="landing-header">
    <img src={cttLogo}></img>
    <div className="links">
      <a href="#">Entrar</a>
      <button>Registar</button>
    </div>
  </div>;
};

export default LandingHeader;
