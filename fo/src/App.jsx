import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";

// Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import DashBoard from "./Pages/DashBoard/DashBoard";

const App = () => {
  const [login, setLogin] = useState(true);

  return !login ? (
    <Route exact path="/" component={LandingPage} />
  ) : (
    <div>
      <DashBoard />

    </div>
  );
};

export default App;
