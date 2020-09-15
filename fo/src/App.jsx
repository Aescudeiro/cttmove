import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import authService from "./services/auth-service";
// Pages
import LandingPage from "./Pages/LandingPage/LandingPage";
import DashBoard from "./Pages/DashBoard/DashBoard";
import Login from "./Pages/Login/Login";

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  return !currentUser ? (
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={Login} />
    </div>
  ) : (
    <div>
      <DashBoard />
    </div>
  );
};

export default App;
