import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./Dashboard.css";

import SideMenu from "../../Components/SideMenu/SideMenu";
import Inicio from "./Inicio/Inicio";
import Definicoes from "./Definicoes/Definicoes";
import Ajuda from "./Ajuda/Ajuda";
import Historico from "./Historico/Historico";
import PedirReembolso from "./PedirReembolso/PedirReembolso";
import DashHeader from "../../Components/DashHeader/DashHeader";

const DashBoard = () => {
  return (
    <div className="dashboard-container">
      <SideMenu />
      <DashHeader />
      <div className="main-area">
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/definicoes" component={Definicoes} />
          <Route path="/ajuda" component={Ajuda} />
          <Route path="/historico" component={Historico} />
          <Route path="/pedirreembolso" component={PedirReembolso} />
          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};

export default DashBoard;
