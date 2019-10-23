import React from "react";
import { navStyles } from "../styles/navStyles";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

export default () => {
  const classes = navStyles();

  const scrollToRef = ref => {
    window.scrollTo({
      top: ref,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <Grid container justify="flex-end" className={classes.navwrap}>
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
      <Link to="/" className={classes.navlink}>
        <Grid item className={classes.navtext} onClick={() => scrollToRef(400)}>
          Portfolio
        </Grid>
      </Link>
    </Grid>
  );
};
