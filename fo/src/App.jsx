import React, { useState } from "react";
import { Route } from "react-router-dom";
// Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Inicio from "./Pages/DashBoard/Inicio/Inicio";
import Definicoes from "./Pages/DashBoard/Definicoes/Definicoes";
import Ajuda from "./Pages/DashBoard/Ajuda/Ajuda";
import Historico from "./Pages/DashBoard/Historico/Historico";
import PedirReembolso from "./Pages/DashBoard/PedirReembolso/PedirReembolso";

const App = () => {
  const [login, setLogin] = useState(true);

  return !login ? (
    <Route exact path="/" component={LandingPage} />
  ) : (
    <div>
      <Route exact path="/" component={DashBoard} />
      <Route path="/inicio" component={Inicio} />
      <Route path="/definicoes" component={Definicoes} />
      <Route path="/ajuda" component={Ajuda} />
      <Route path="/historico" component={Historico} />
      <Route path="/pedirreembolso" component={PedirReembolso} />
    </div>
  );
};

export default App;
