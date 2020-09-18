import React, { useState } from "react";
import "./SoIda.css";

const SoIda = () => {
  const [addFlight, setAddFlight] = useState(false);

  const handleClick = () => {
    setAddFlight(!addFlight);
  };

  function NewFlight() {
    return (
      <div>
        <div className="flight-dates-container">
          <div>
            <p>Origem</p>
            <input type="text" name="origem" />
          </div>
          <div>
            <p>Destino</p>
            <input type="text" name="destino" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="adicionar-voo">
        <button onClick={handleClick}>+ Adicionar voo</button>
      </div>

      <div className="flight-dates-container">
        <div>
          <p>Origem</p>
          <input type="text" name="origem" />
        </div>
        <div>
          <p>Destino</p>
          <input type="text" name="destino" />
        </div>
      </div>
      <div className="flight-dates-container">
        <div>
          <p>Data do Voo</p>
          <input type="text" name="origem" />
        </div>
      </div>
      {addFlight ? <NewFlight /> : null}
    </div>
  );
};

export default SoIda;
