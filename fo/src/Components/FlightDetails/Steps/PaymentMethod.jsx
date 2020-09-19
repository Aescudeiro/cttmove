import React, { useState } from "react";
import "./PaymentMethod.css";

//Material-UI
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const PaymentMethod = () => {
  const [value, setValue] = useState("Transferência Bancária");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="payment-method-container">
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <h3 id="refund-question">Como pretende receber o seu reembolso?</h3>
        <div className="transferencia-bancaria">
          <FormControlLabel
            value="Transferência Bancária"
            control={<Radio />}
            label="Transferência Bancária"
          />
          <p>
            Dependendo do seu banco, a transferência poderá demorar entre 1 e 3
            dias.
          </p>
        </div>
        <div className="levantamento-em-dinheiro">
          <FormControlLabel
            value="Levantamento em Numerário num Balcão CTT"
            control={<Radio />}
            label="Levantamento em Numerário num Balcão CTT"
          />
          <p>
            Caso pretenda receber o reembolso em dinheiro, deverá levar o código
            que lhe é fornecido a um balcão CTT.
          </p>
        </div>
      </RadioGroup>
    </div>
  );
};

export default PaymentMethod;
