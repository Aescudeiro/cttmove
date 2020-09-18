import React from "react";
import "./Graph.css";
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    valor: 0,
  },
  {
    name: "Fev",
    valor: 0,
  },
  {
    name: "Mar",
    valor: 0,
  },
  {
    name: "Abr",
    valor: 0,
  },
  {
    name: "Mai",
    valor: 0,
  },
  {
    name: "Jun",
    valor: 100,
  },
  {
    name: "Jul",
    valor: 150,
  },
  {
    name: "Ago",
    valor: 90,
  },
  {
    name: "Set",
    valor: 20,
  },
  {
    name: "Out",
    valor: 0,
  },
  {
    name: "Nov",
    valor: 10,
  },
  {
    name: "Dez",
    valor: 0,
  },
];

const Graph = () => {
  return (

    <div className="graph ui-chart">
      <AreaChart
        width={990}
        height={400}
        data={data}
        margin={{ top: 20, right: 30, left: 30, bottom: 20 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip
          cursor={{ stroke: "rgba(0,0,255,0.1)", strokeWidth: 20 }}
          wrapperStyle={{ top: -100, left: -60 }}
        />
        <Area
          type="monotoneX"
          dataKey="valor"
          stroke="#8884d8"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </div>
    
  );
};

export default Graph;
