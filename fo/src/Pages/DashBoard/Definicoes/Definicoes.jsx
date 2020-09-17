import React, { useState } from "react";
import "./Definicoes.css";
import TabPanel from "../../../Components/TabPanel/TabPanel.jsx";
import DadosDoUsuário from "../../../Components/DadosDoUsuário/DadosDoUsuário.jsx";
import MetodosDePagamento from "../../../Components/MetodosDePagamento/MetodosDePagamento.jsx";
import DefinicoesDeConta from "../../../Components/DefinicoesDeConta/DefinicoesDeConta.jsx";

const Definicoes = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const checkValue = (value) => {
    switch (value) {
      case 0:
        return <DadosDoUsuário />
      case 1:
        return <MetodosDePagamento />
      case 2:
        return <DefinicoesDeConta/>;
    }
  }

  return <div>
    <h1 id="title">Definições</h1>
    <TabPanel handleChange={handleChange} value={value} />
    {checkValue(value)}
  </div>;
};

export default Definicoes;
