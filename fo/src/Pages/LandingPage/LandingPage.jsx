import React from "react";
import "./LandingPage.css";
import LandingHeader from "../../Components/LandingHeader/LandingHeader";

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <div className="flex-container">
        <div className="white-bg">
          <h1>
            Simplificámos o<br></br> processo de<br></br> reembolso.
          </h1>
          <button>Saber Mais </button>
        </div>
        <div className="picture"></div>
      </div>
    </>
  );
};

export default LandingPage;
