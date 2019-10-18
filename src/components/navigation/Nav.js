import React from "react";
import { navStyles } from "../styles/navStyles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default () => {
  const classes = navStyles();

  return (
    <Grid container className={classes.navwrap}>
      <Link to="#">
        <Grid item className={classes.navtext}>
          Home
        </Grid>
      </Link>
      <Link to="/info">
        <Grid item className={classes.navtext}>
          Info
        </Grid>
      </Link>
      <Link to="/">
        <Grid item className={classes.navtext}>
          Github
        </Grid>
      </Link>
    </Grid>
  );
};
