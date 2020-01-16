import React from "react";
// import { Redirect } from "react-router-dom";
import { Grid,Typography } from "@material-ui/core";
import { infoStyles } from "../styles/bodyStyles";
// import { Link } from "react-router-dom";
import murrpic from "../../assets/murraypic2.jpg";


// maybe do a running stock ticker at the bottom??


export default props => {
  const styles = infoStyles();

  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={styles.infoband}
    >
      <Grid item className={styles.infocard1}>
        <img src={murrpic} />
      </Grid>

      <Grid item xs={8} className={styles.infocard2}>
        <Typography className={styles.infocard2} variant="subtitle1">

        Hi. I'm Rory Murray. I'm a Full Stack Web Developer with a background in
        finance and global markets. My passion is in building tools that help
        bring people financial sovereignty, or reduce frictions they have in
        building communities, particularly at a local level. I build across the
        stack, but have a particular interest in blockchain and back end
        development opportunities. I can be reached via email at rory.christian.murray@gmail.com, on Twitter @therorymurray, or on Github at rorychristianmurray.
        </Typography>
      </Grid>
      <Grid container
      direction="row"
      justify="center"
      alignItems="center"> 
      <Grid item className={styles.skillcard}>          <ul>
            <li>HTML/CSS (SCSS/LESS)</li>
            <li>JavaScript</li>
            <li>React/Redux</li>
            <li>SQL (PostsgreSQL)</li>
            <li>Java (Spring Framework)</li>
          </ul></Grid>
      <Grid item className={styles.skillcard}>          <ul>
            <li>Node (Express)</li>
            <li>Python</li>
            <li>Django</li>
            <li>Git</li>
          </ul></Grid>
    
      </Grid>

    </Grid>
  );
};
