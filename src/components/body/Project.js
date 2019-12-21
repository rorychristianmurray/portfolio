import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import { portfolioStyles } from "../styles/bodyStyles";
import { Link } from "react-router-dom";

export default props => {
  // console.log("Project props", props);
  console.log(props)
  const styles = portfolioStyles();
  const { title, details, id, git } = props.project;
  return (
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
          {title}
        </Typography>
      </Grid>
      <Grid item xs={8} className={styles.projDetails}>
        <Typography variant="subtitle1" className={styles.projectDetailsText}>
          {details}
        </Typography>
      </Grid>
      {/* <Link to={`/project/${id}`} style={{ textDecoration: "none" }}> */}
      <a href={git}style={{ textDecoration: "none" }}>

        <Grid item>
          <Button className={styles.projButton}>cd murray/learn_more</Button>
        </Grid>
      </a>
      {/* </Link> */}
    </Grid>
  );
};
