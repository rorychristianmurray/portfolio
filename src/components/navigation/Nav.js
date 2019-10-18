import React from "react";
import { navStyles } from "../styles/navStyles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default () => {
  const classes = navStyles();

  return (
    <Grid container className={classes.navwrap}>
      <Link>
        <Grid item className={classes.navtext}>
          It's a navbar
        </Grid>
      </Link>
    </Grid>
  );
};
