import React from "react";
import authService from "../../services/auth-service";

const DashBoard = () => {
  return (
    <div>
      <div>
        DashBoard
        {JSON.stringify(authService.getCurrentUser())}
        <button onClick={() => authService.logout()}>Logout</button>
      </div>
    </div>
  );
};

export default DashBoard;
