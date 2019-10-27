  
import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
    filter: `blur(10px)`
  },
  progress: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: `translate(-50%, -50%)`
  }
}));

const MainLoader = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.root} />
      <div className={classes.progress}>
        <CircularProgress />
      </div>
    </Fragment>
  );
};

export default MainLoader;