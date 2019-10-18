import React from "react";
import { Grid } from "@material-ui/core";
import { portfolioStyles } from "./BodyStyles";

export default () => {
  const styles = portfolioStyles();
  return (
    <Grid container className={styles.project}>
      <Grid item>Title</Grid>
      <Grid item>Details</Grid>
    </Grid>
  );
};
