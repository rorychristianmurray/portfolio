import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { headbandStyles } from "./BodyStyles";

export default () => {
  const styles = headbandStyles();
  return (
    <Grid container justify="center" className={styles.headband}>
      <Grid item>Headband active</Grid>
    </Grid>
  );
};
