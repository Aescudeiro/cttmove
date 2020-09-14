import React, { useState } from "react";

const App = () => {
  const [login] = useState(true);

  return !login ? <div>CTTMOVE REGISTER</div> : <div>CTTMOVE</div>;
};

export default App;
