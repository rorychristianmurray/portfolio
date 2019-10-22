import React from "react";
import { navStyles } from "../styles/navStyles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default () => {
  const classes = navStyles();

  return (
    <Grid container justify="flex-end" className={classes.navwrap}>
      <Link to="#" className={classes.navlink}>
        <Grid item className={classes.navtext}>
          Home
        </Grid>
      </Link>
      <Link to="/info" className={classes.navlink}>
        <Grid item className={classes.navtext}>
          Info
        </Grid>
      </Link>
      <Link to="/" className={classes.navlink}>
        <Grid item className={classes.navtext}>
          Portfolio
        </Grid>
      </Link>
    </Grid>
  );
};
