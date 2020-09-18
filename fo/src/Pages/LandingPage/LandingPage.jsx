import React from "react";
import "./LandingPage.css";
import LandingHeader from "../../Components/LandingHeader/LandingHeader";
import image from "../../Assets/new-picture.jpg";

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <div className="flex-container landing-picture">
            <div>
              <h1>Simplificámos o <br></br>processo de <br></br>reembolso.</h1>
              <button>Saber Mais </button>
          </div>
      </div>
    </>
  );
};

export default LandingPage;
