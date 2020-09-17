import React from "react";
import "./DefinicoesDeConta.css";

import AuthService from "../../services/auth-service"

const DefinicoesDeConta = () => {

    const user = AuthService.getCurrentUser()

    return (
        <form id="form-container">
        <div>
            <h2>Definições de conta</h2>
        </div>
    </form>
    )
};

export default DefinicoesDeConta;