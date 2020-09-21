import React from "react";
import "./LoadingPopup.css";
import { FaTimes } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { FaCheck, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoadingPopup = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > * + *": {
        marginLeft: theme.spacing(0),
        alignSelf: "self-end",
      },
    },
  }));

  function CircularIndeterminate() {
    const classes = useStyles();

    return (
      <div className={classes.root} id="circle" size={50}>
        <FaCheck size={200} color={"#49BF9C"} />
      </div>
    );
  }
  return (
    <>
      <div className="loading-popup-container">
        {CircularIndeterminate()}
        <p className="p-refresh">Reembolso feito com sucesso.</p>
        <Link to="/">Voltar à página Inicial</Link>
      </div>
      <div className="background" onClick={props.handleClick}></div>
    </>
  );
};

export default LoadingPopup;
