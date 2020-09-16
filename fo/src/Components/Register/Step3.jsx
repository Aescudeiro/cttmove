import React from "react";
import Input from "react-validation/build/input";
import { FaChevronRight } from "react-icons/fa";

const Step3 = (props) => {
  return (
    <div>
      <p>Step 3/3</p>
      <label htmlFor="address">Morada Fiscal</label>
      <Input placeHolder="Ex. Rua Jacinto Cândido, nº13" type="text" name="street" />

      <label htmlFor="password">Código Postal</label>
      <Input placeHolder="0000-000" type="text" name="postcode" />

      <label htmlFor="location">Localidade</label>
      <Input placeHolder="Ex. Angra do Heroísmo" type="text" name="location" />
      <button id="continuar-button" onClick={props.handleClick}>
        terminar <FaChevronRight />
      </button>
    </div>
  );
};

export default Step3;
