import React from "react";
import { navStyles } from "../styles/navStyles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default () => {
  const classes = navStyles();
  return (
    <Grid container justify="space-around" className={classes.navfootie}>
      <Link to="/" className={classes.navlink}>
        <Grid item className={classes.navtext}>
          Home
        </Grid>
      </Link>
      <Link to="/info" className={classes.navlink}>
        <Grid item className={classes.navtext}>
          Info
        </Grid>
      </Link>
      <Link to="/portfolio" className={classes.navlink}>
        <Grid item className={classes.navtext}>
          Portfolio
        </Grid>
      </Link>
    </Grid>
  );
};
