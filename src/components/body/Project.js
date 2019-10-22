import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { portfolioStyles } from "../styles/bodyStyles";

export default props => {
  console.log("Project props", props);
  const styles = portfolioStyles();
  const { title, details } = props.project;

  return (
    <Grid
      container
      item
      xs={4}
      direction="column"
      justify="center"
      alignItems="center"
      className={styles.project}
    >
      <Grid item className={styles.title}>
        <Typography variant="subtitle1" className={styles.projectTitleText}>
          {title}
        </Typography>
      </Grid>
      <Grid item className={styles.projDetails}>
        <Typography variant="subtitle1" className={styles.projectDetailsText}>
          {details}
        </Typography>
      </Grid>
    </Grid>
  );
};
