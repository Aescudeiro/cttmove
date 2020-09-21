import React from "react";
import "../Inicio/Inicio.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../../../Components/Card/Card";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

//Components
const Historico = () => {
  const classes = useStyles();

  function createData(
    nVoo,
    dataIda,
    dataVolta,
    ida,
    volta,
    companhia,
    valor,
    pontos
  ) {
    return { nVoo, dataIda, dataVolta, ida, volta, companhia, valor, pontos };
  }

  const rows = [
    createData(
      "TP156790",
      "14/04/2019",
      "26/07/2020",
      "TER-LIS",
      "LIS-TER",
      "TAP AIR PORTUGAL",
      "376,00€",
      "..."
    ),
    createData(
      "TP156790",
      "14/04/2019",
      "26/07/2020",
      "TER-LIS",
      "LIS-TER",
      "TAP AIR PORTUGAL",
      "376,00€",
      "..."
    ),
    createData(
      "TP156790",
      "14/04/2019",
      "26/07/2020",
      "TER-LIS",
      "LIS-TER",
      "TAP AIR PORTUGAL",
      "376,00€",
      "..."
    ),
    createData(
      "TP156790",
      "14/04/2019",
      "26/07/2020",
      "TER-LIS",
      "LIS-TER",
      "TAP AIR PORTUGAL",
      "376,00€",
      "..."
    ),
  ];

  return (
    <div
      style={{
        display: "flex",
        flexGrow: "1",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1 className="title">Dados do Mês de Junho</h1>
      <div className="cards">
        <Card title="Valor gasto" number="168.00€" />
        <Card title="Número total de voos" number="6" />
        <Card title="Valor total reembolsado" number="1,200.00€" />
      </div>
      <div className="card1">
        <TableContainer id="graph-container">
          <Table className={classes} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Nº de Voo</TableCell>
                <TableCell align="center">Data de Ida</TableCell>
                <TableCell align="center">Data de Volta</TableCell>
                <TableCell align="center">Ida</TableCell>
                <TableCell align="center">Volta</TableCell>
                <TableCell align="center">Companhia</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.nVoo}>
                  <TableCell align="center">{row.nVoo}</TableCell>
                  <TableCell align="center">{row.dataIda}</TableCell>
                  <TableCell align="center">{row.dataVolta}</TableCell>
                  <TableCell align="center">{row.ida}</TableCell>
                  <TableCell align="center">{row.volta}</TableCell>
                  <TableCell align="center">{row.companhia}</TableCell>
                  <TableCell align="center">{row.valor}</TableCell>
                  <TableCell align="center">{row.pontos}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Historico;
