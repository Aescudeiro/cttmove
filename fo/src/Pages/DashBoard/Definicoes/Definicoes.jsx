import React from "react";
import "./Definicoes.css";
import TabPanel from "../../../Components/TabPanel/TabPanel.jsx";
import DadosDoUsuário from "../../../Components/DadosDoUsuário/DadosDoUsuário.jsx";

const Definicoes = () => {
  return <div>
    <h1 id="title">Definições</h1>
    <TabPanel/>
    <DadosDoUsuário/>
  </div>;
};

export default Definicoes;
