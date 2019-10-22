import React from "react";
import { Grid, Paper } from "@material-ui/core";
// import Headband from "./Headband";
import Project from "./Project";
import { project } from "../../api/data";

export default () => {
  console.log("project", project);

  return (
    <Grid container justify="center" direction="column">
      {/* <Grid item className="headband-wrapper">
        <Paper>
          <Headband />
        </Paper>
      </Grid> */}
      <Grid item>
        <Paper>
          <Project />
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <Project />
        </Paper>
      </Grid>
      <Grid item>
        <Paper>
          <Project />
        </Paper>
      </Grid>
    </Grid>
  );
};
