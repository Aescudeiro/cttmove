import React, { useState } from "react";
import "./RegisterMasterForm.css";
import { useForm, useStep } from "react-hooks-helper";

import { Link } from "react-router-dom";

import Form from "react-validation/build/form";

//Form Steps
import Step1 from "../../Components/Register/Step1.jsx";
import Step2 from "../../Components/Register/Step2.jsx";
import Step3 from "../../Components/Register/Step3.jsx";
import FinalStep from "../../Components/Register/FinalStep.jsx";

const Register = () => {
  const [step, setStep] = useState(1);

  const MultiStepForm = (step) => {
    switch (step) {
      case 1:
        return <Step1 handleClick={() => setStep(2)} />;
      case 2:
        return <Step2 handleClick={() => setStep(3)} />;
      case 3:
        return <Step3 handleClick={() => setStep(4)} />;
      default:
        return null;
    }
  };

  return (
    <div className="register-container">
      <div className="picture"></div>
      <div className="form">
        {step === 4 ? (
          <FinalStep />
        ) : (
          <form>
            <Form>
              <h1>Criar Conta</h1>
              <h5>
                Registe-se e descubra as vantagens que os CTT move lhe podem
                oferecer.
              </h5>
              <button id="gov-button">AUTENTICAÇÃO.GOV</button>
              <p>ou</p>
              {MultiStepForm(step)}

              <p id="question">
                Já tem uma conta?{" "}
                <Link to="/login">
                  <span>Entre aqui.</span>
                </Link>
              </p>
            </Form>
          </form>
        )}
      </div>
    </div>
  );
};

export default Register;
