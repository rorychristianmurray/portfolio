import React from "react";
import { Grid,Typography } from "@material-ui/core";
import { infoStyles } from "../styles/bodyStyles";
import murrpic from "../../assets/murray_gh_edited.jpeg"

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
        <img src={murrpic} alt="a very handsome man"/>
      </Grid>

      <Grid item xs={8} className={styles.infocard2}>
        <div className={styles.infocard2} style={{
    color: "#00ff00",
    fontSize: "1.6rem",
    fontFamily: "Classic Console",
    lineHeight: "1.1"
  }}>

        Hi. I'm Rory Murray. I'm a Full Stack Web Developer with a background in
        finance and global markets. My passion is in building tools that help
        bring people financial sovereignty, or reduce frictions they have in
        building communities, particularly at a local level. I build across the
        stack, but have a particular interest in blockchain and back end
        development opportunities. I can be reached via email at rory.christian.murray@gmail.com, on Twitter @therorymurray, or on Github at rorychristianmurray.
        </div>
      </Grid>
      <Grid container
      direction="row"
      justify="center"
      alignItems="flex-start"> 
      <Grid item className={styles.skillcard}>          <ul style={{
    color: "#00ff00",
    fontSize: "1.6rem",
    fontFamily: "Classic Console",
    lineHeight: "1.1"
  }}>
            <li className={styles.skill}>HTML/CSS (SCSS/LESS)</li>
            <li className={styles.skill}>JavaScript</li>
            <li className={styles.skill}>React/Redux</li>
            <li className={styles.skill}>SQL (PostsgreSQL)</li>
            <li className={styles.skill}>Java (Spring Framework)</li>
          </ul></Grid>
      <Grid item className={styles.skillcard}>          <ul>
            <li className={styles.skill}>Node (Express)</li>
            <li className={styles.skill}>Python</li>
            <li className={styles.skill}>Django</li>
            <li className={styles.skill}>Git</li>
          </ul></Grid>
    
      </Grid>

    </Grid>
  );
};
