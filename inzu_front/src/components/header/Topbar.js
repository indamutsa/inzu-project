import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Alert from "../Alert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1.5),
      marginTop: theme.spacing(9.5),
      width: "100%",
      height: theme.spacing(5),
    },
  },
}));

export default function Topbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={6}>
        <div className="d-flex flex-row flex-wrap justify-content-around">
          <div className="p-2 text-success">
            <a href="/#" className="text-success">
              <i className="fas fa-phone" /> (617)-555-5555
            </a>
          </div>
          <div className="p-2">
            <a href="/#" className="text-success">
              <i className="fas fa-envelope-open" /> contact@inzuestates.com
            </a>
          </div>
          <Alert />
          <div className="p-2">
            <a href="/#" className="text-success">
              <i className="fab fa-twitter mr-2" />
            </a>
            <a href="/#" className="text-success">
              <i className="fab fa-facebook  mr-2" />
            </a>
            <a href="/#" className="text-success">
              <i className="fab fa-linkedin  mr-2" />
            </a>
            <a href="/#" className="text-success">
              <i className="fab fa-instagram  mr-2" />
            </a>
            <a href="/#" className="text-success">
              <i className="fab fa-pinterest  mr-2" />
            </a>
          </div>
        </div>
      </Paper>
    </div>
  );
}
