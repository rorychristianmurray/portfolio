import React from "react";
import { Grid, Typography} from "@material-ui/core";
// import Headband from "./Headband";

import { portfolioStyles } from "../styles/bodyStyles";

export default props => {
  const styles = portfolioStyles();


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
        Completed during Lambda School Labs16 with a team of three other Web Developers and two UX Designers, Founder Grants is a central repository where early-stage founders can search for applicable grants. Utilizes a user-moderated curation model. The github for the front end can be found <a href="https://github.com/Lambda-School-Labs/startup-grant-database-fe" style={{color: "#00ff00"}}>here</a>, while the back end can be found <a href="https://github.com/Lambda-School-Labs/startup-grant-database-be" style={{color: "#00ff00"}}>here</a>. Change directories below to access the deployed web app.
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
      <a href="https://grantly-b5b58.firebaseapp.com/"style={{ textDecoration: "none" }}>
        <Grid item>
          <div className={styles.projButton}>$ cd murray/portfolio/founder_grants/</div>
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
          Immunization Tracker
        </Typography>
      </Grid>
      <Grid item xs={8} >
        <Typography variant="subtitle1" className={styles.projectDetailsText}>
        I built the server API in Java for the Immunization Tracker app. This includes over 30 endpoints with full CRUD functionality, custom error handling, docs in Swagger, and authorization utilizing OAuth2. The github can be found <a href="https://github.com/BWimmunizationtracker/backend" style={{color: "#00ff00"}} >here</a>. Change directories below to be taken to deployed API.
        </Typography>
      </Grid>
      <Grid item xs={8} className={styles.projectStack} >
        Java - Spring - H2 - PostgreSQL - OAuth2
      </Grid>
      <a href="https://rcm-immunization-tracker.herokuapp.com/"style={{ textDecoration: "none" }}>
        <Grid item>
          <div className={styles.projButton}>$ cd murray/portfolio/immunization_tracker/</div>
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
          Life GPA
        </Typography>
      </Grid>
      <Grid item xs={8} >
        <Typography variant="subtitle1" className={styles.projectDetailsText}>
        Life GPA is an app that lets you track your habits across different categories providing real time scores. I worked with another FE dev to develop multiple data dashboards that update with user input. It has CRUD functionality for maintaining lists of habits with a colorized category system, and interactive habit checkoff system. The repo can be found <a href="https://github.com/lifegpa-lambda/Front-End" style={{color: "#00ff00"}} >here</a>. Change directories below to be taken to deployed app.
        </Typography>
      </Grid>
      <Grid item xs={8} className={styles.projectStack} >
        React - Redux - JavaScript - HTML - CSS
      </Grid>
      <a href="https://lifegpa-app.netlify.com/"style={{ textDecoration: "none" }}>
        <Grid item>
          <div className={styles.projButton}>$ cd murray/portfolio/life_gpa/</div>
        </Grid>
      </a>
    </Grid>
    </Grid>
  );
};
