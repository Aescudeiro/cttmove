import React, { useState } from "react";
import "./FlightDetails.css";

//Material-UI 
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const FlightDetails = () => {
  const [value, setValue] = useState("Ida e Volta");
  function RadioButtonsGroup() {
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    return (
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="Ida e Volta"
            control={<Radio />}
            label="Ida e Volta"
          />
          <FormControlLabel value="Só ida" control={<Radio />} label="Só ida" />
        </RadioGroup>
      </FormControl>
    );
  }

  return (
    <div>
      <h4 id="option-select">Seleccione uma opção</h4>
      <RadioButtonsGroup />
      {value === "Só ida" ? (
        <h4 className="detalhes-do-voo">Detalhes do Voo</h4>
      ) : (
        <h4 className="detalhes-do-voo">Detalhes do voo de Ida</h4>
      )}
      <hr className="recta"></hr>
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
        <div>
          <p>Número do Bilhete</p>
          <input type="text" name="número do bilhete" />
        </div>
      </div>
      <div className="flight-dates-container">
        <div>
          <p>Companhia Aérea</p>
          <input type="text" name="companhia aérea" />
        </div>
        <div>
          <p>Valor Total</p>
          <input type="text" name="valor total" />
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
