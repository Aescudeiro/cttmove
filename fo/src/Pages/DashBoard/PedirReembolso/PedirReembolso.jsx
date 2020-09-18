import React, {useState} from "react";
import "./PedirReembolso.css";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

//components
import SoIda from "../../../Components/SoIda/SoIda.jsx";
import IdaeVolta from "../../../Components/IdaeVolta/IdaeVolta.jsx";


const PedirReembolso = () => {
  const [value, setValue] = useState("Ida e Volta");
  function RadioButtonsGroup() {
   
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  
    return (
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="Ida e volta" control={<Radio />} label="Ida e Volta" />
          <FormControlLabel value="Só ida" control={<Radio />} label="Só ida" />
        </RadioGroup>
      </FormControl>
    );
  }
  
  return (
    <div className="refund-container">
      <h1 className="title">Pedir Reembolso</h1>
      <p>
        Por favor preencha todos os campos correctamente. Em caso de erro,
        contacte-nos na secção de Ajuda.
      </p>
      <h5>Seleccione uma opção:</h5>
      <RadioButtonsGroup/>
      {value === "Só ida" ? <SoIda/> : <IdaeVolta/>}
    </div>
  );
};
export default PedirReembolso;
