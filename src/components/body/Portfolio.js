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
        <div className={styles.projectTitleText}>
          Founder Grants
        </div>
      </Grid>
      <Grid item xs={8} >
        <div className={styles.projectDetailsText} style={{
    color: "#00ff00",
    fontSize: "1.6rem",
    fontFamily: "Classic Console",
    lineHeight: "1.1"
  }}>
        Completed during Lambda School Labs16 with a team of three other Web Developers and two UX Designers, Founder Grants is a central repository where early-stage founders can search for applicable grants. Utilizes a user-moderated curation model. The github for the front end can be found <a href="https://github.com/Lambda-School-Labs/startup-grant-database-fe" style={{color: "#00ff00"}}>here</a>, while the back end can be found <a href="https://github.com/Lambda-School-Labs/startup-grant-database-be" style={{color: "#00ff00"}}>here</a>. Change directories below to access the deployed web app.
        </div>
      </Grid>
      <Grid item xs={8} className={styles.projectStack} >
        React - Redux - Node / Express - PostgreSQL - Material UI
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
        <div className={styles.projectTitleText}>
          Immunization Tracker
        </div>
      </Grid>
      <Grid item xs={8} >
        <div className={styles.projectDetailsText} style={{
    color: "#00ff00",
    fontSize: "1.6rem",
    fontFamily: "Classic Console",
    lineHeight: "1.1"
  }}>
        I built the server API in Java for the Immunization Tracker app. This includes over 30 endpoints with full CRUD functionality, custom error handling, docs in Swagger, and authorization utilizing OAuth2. The github can be found <a href="https://github.com/BWimmunizationtracker/backend" style={{color: "#00ff00"}} >here</a>. Change directories below to be taken to deployed API.
        </div>
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
        <div  className={styles.projectTitleText}>
          Life GPA
        </div>
      </Grid>
      <Grid item xs={8} >
      <div className={styles.projectDetailsText} style={{
    color: "#00ff00",
    fontSize: "1.6rem",
    fontFamily: "Classic Console",
    lineHeight: "1.1"
  }}>
        Life GPA is an app that lets you track your habits across different categories providing real time scores. I worked with another FE dev to develop multiple data dashboards that update with user input. It has CRUD functionality for maintaining lists of habits with a colorized category system, and interactive habit checkoff system. The repo can be found <a href="https://github.com/lifegpa-lambda/Front-End" style={{color: "#00ff00"}} >here</a>. Change directories below to be taken to deployed app.
        </div>
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
