import React from "react";
import "./LoadingPopup.css";
import { FaTimes } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

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
        <CircularProgress color="secondary" />
      </div>
    );
  }
  return (
    <>
      <div className="loading-popup-container">
        {CircularIndeterminate()}
        <p className="p-refresh">
          Por favor aguade enquanto processamos o seu pedido.
        </p>
        <p>Não faça refresh à página.</p>
      </div>
      <div className="background" onClick={props.handleClick}></div>
    </>
  );
};

export default LoadingPopup;
