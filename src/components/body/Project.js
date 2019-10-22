import React from "react";
import { Grid } from "@material-ui/core";
import { portfolioStyles } from "./BodyStyles";

export default () => {
  const styles = portfolioStyles();
  return (
    <Grid container direction="column" className={styles.project}>
      <Grid item className={styles.title}>
        Title
      </Grid>
      <Grid item className={styles.projDetails}>
        Details
      </Grid>
    </Grid>
  );
};
