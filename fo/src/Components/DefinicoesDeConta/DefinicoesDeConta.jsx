import React, {useState} from "react";
import "./DefinicoesDeConta.css";
import PasswordPopup from "../../Components/PasswordPopup/PasswordPopup.jsx";

import AuthService from "../../services/auth-service";

const DefinicoesDeConta = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(!showPopup);
  };

  const user = AuthService.getCurrentUser();

  return (
    <>
      <form id="form-container">
        <div className="inputs-xs">
          <div className="email-field">
            <label>Email</label>
            <input type="text" value={user.email}></input>
          </div>
          <div>
            <label>Contacto Telefónico</label>
            <input type="text" value={user.phone}></input>
          </div>
        </div>
        <div id="password-group">
          <div id="password">
            <label>Password</label>
            <h4 onClick={handleClick}>Alterar password</h4>
          </div>
          <input type="text" value={user.nif}></input>
        </div>
        <hr></hr>

        <div id="close-account">
          <div>
            <h2>Fechar Conta</h2>
            <p className="description">
              Esta ação apagará todos os seus dados e detalhes permanentemente.
            </p>
          </div>
          <button>Fechar Conta</button>
        </div>
      </form>
      {showPopup ? <PasswordPopup handleClick={handleClick} /> : null}
    </>
  );
};

export default DefinicoesDeConta;
