import React from "react";
import "./DefinicoesDeConta.css";

import AuthService from "../../services/auth-service"

const DefinicoesDeConta = () => {

    const user = AuthService.getCurrentUser()

    return (
        <form id="form-container">
            <div className="inputs-xs">
                <div>
                    <label>Email</label>
                    <input type="text" value={user.email}></input>
                </div>
                <div>
                    <label>Contacto Telefónico</label>
                    <input type="text" value={user.phone}></input>
                </div>
            </div>
            <div>
                <div id="password">
                    <label>Password</label>
                    <h4 >Alterar password</h4>
                </div>
                <input type="text" value={user.nif}></input>
            </div>
            <hr></hr>

            <div id="close-account">
                <div>
                    <h2 className="title">Fechar Conta</h2>
                    <p className="description">Esta ação apagará todos os seus dados e detalhes permanentemente.</p>
                </div>
                    <button>Fechar Conta</button>
            </div>
        </form>
    )
};

export default DefinicoesDeConta;