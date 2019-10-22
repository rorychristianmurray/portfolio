import React from "react";
import { Grid, Paper } from "@material-ui/core";
// import Headband from "./Headband";
import Project from "./Project";
import { project } from "../../api/data";
import { portfolioStyles } from "./BodyStyles";

export default () => {
  console.log("project", project);

  const styles = portfolioStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={styles.portfolio}
    >
      {project.map(project => {
        return <Project project={project} key={project.id} />;
      })}
    </Grid>
  );
};
