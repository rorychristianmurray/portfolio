import React from "react";
import { Grid, Paper } from "@material-ui/core";
import Headband from "./Headband";

export default () => {
  return (
    <Grid container justify="center" direction="column">
      <Grid item className="headband-wrapper">
        <Paper>
          <Headband />
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <div>Portfolio here</div>
        </Paper>
      </Grid>
    </Grid>
  );
};