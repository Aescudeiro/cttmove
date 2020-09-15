import React from "react";
import { Route } from "react-router-dom";

import SideMenu from "../../Components/SideMenu/SideMenu";
import Inicio from "./Inicio/Inicio";
import Definicoes from "./Definicoes/Definicoes";
import Ajuda from "./Ajuda/Ajuda";
import Historico from "./Historico/Historico";
import PedirReembolso from "./PedirReembolso/PedirReembolso";

const DashBoard = () => {
  return (
    <div>
      <SideMenu />
      <div>
        <Route exact path="/" component={Inicio} />
        <Route path="/definicoes" component={Definicoes} />
        <Route path="/ajuda" component={Ajuda} />
        <Route path="/historico" component={Historico} />
        <Route path="/pedirreembolso" component={PedirReembolso} />
      </div>
    </div>
  );
};

export default DashBoard;
