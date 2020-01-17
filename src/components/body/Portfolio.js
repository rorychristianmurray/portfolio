import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
// import Headband from "./Headband";
import Project from "./Project";
import { project } from "../../api/data";
import { portfolioStyles } from "../styles/bodyStyles";

export default props => {
  const styles = portfolioStyles();
  // console.log(`props : ${props}`)
  // console.log(`props : ${project}`)

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={styles.portfolio}
    >
      <Grid
      container
      item
      direction="column"
      justify="center"
      alignItems="center"
      className={styles.project}
    >
      <Grid item xs={8} className={styles.title}>
        <Typography variant="subtitle1" className={styles.projectTitleText}>
          Founder Grants
        </Typography>
      </Grid>
      <Grid item xs={8} >
        <Typography variant="subtitle1" className={styles.projectDetailsText}>
        Completed during Lambda School Labs16 with a team of three other Web Developers and two UX Designers, Founder Grants is a central repository where early-stage founders can search for applicable grants. Utilizes a user-moderated curation model.
        </Typography>
      </Grid>
      <Grid item xs={8} className={styles.projectStack} >
        React - Redux - Node / Express - PostgreSQL - Material UI
        {/* <ul className={styles.projectDetailsText}>
          <li>React</li>
          <li>Redux</li>
          <li>Node / Express</li>
          <li>PostgreSQL</li>
          <li>Material UI</li>
        </ul> */}
      </Grid>
      <a href="https://github.com/Lambda-School-Labs/startup-grant-database-fe"style={{ textDecoration: "none" }}>
        <Grid item>
          <Button className={styles.projButton}>$ cd murray/portfolio/founder_grants/</Button>
        </Grid>
      </a>
    </Grid>
    <Grid
      container
      item
      direction="column"
      justify="center"
      alignItems="center"
      className={styles.project}
    >
      <Grid item xs={8} className={styles.title}>
        <Typography variant="subtitle1" className={styles.projectTitleText}>
          Founder Grants
        </Typography>
      </Grid>
      <Grid item xs={8} >
        <Typography variant="subtitle1" className={styles.projectDetailsText}>
        Completed during Lambda School Labs16 with a team of three other Web Developers and two UX Designers, Founder Grants is a central repository where early-stage founders can search for applicable grants. Utilizes a user-moderated curation model.
        </Typography>
      </Grid>
      <Grid item xs={8} className={styles.projectStack} >
        React - Redux - Node / Express - PostgreSQL - Material UI
      </Grid>
      <a href="https://github.com/Lambda-School-Labs/startup-grant-database-fe"style={{ textDecoration: "none" }}>
        <Grid item>
          <Button className={styles.projButton}>$ cd murray/portfolio/immunization_tracker/</Button>
        </Grid>
      </a>
    </Grid>
    </Grid>
  );
};
