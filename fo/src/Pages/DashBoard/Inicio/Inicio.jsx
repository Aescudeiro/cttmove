import React from "react";
import "./Inicio.css";
//Components
import Card from "../../../Components/Card/Card";
import Graph from "../../../Components/Graph/Graph";
const Inicio = () => {
  return (
    <div>
      <h1 className="title">Dados do Mês de Junho</h1>
      <div className="cards">
        <Card title="Valor gasto" number="168.00€" />
        <Card title="Número total de voos" number="6" />
        <Card title="Valor total reembolsado" number="1,200.00€" />
      </div>
      <div className="graph">
        <Graph />
      </div>
    </div>
  );
};

export default Inicio;
