import React from "react";
import "./LandingPage.css";
import LandingHeader from "../../Components/LandingHeader/LandingHeader";

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <div className="flex-container">
        <div className="white-bg">
          <div>
            <div>
              <h1>Simplificámos o processo de reembolso.</h1>
            </div>
            <div>
              <button>Saber Mais </button>
            </div>
          </div>
        </div>
        <div className="picture"></div>
      </div>
    </>
  );
};

export default LandingPage;
