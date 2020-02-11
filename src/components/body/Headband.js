import React from "react";
import { Grid } from "@material-ui/core";
import { headbandStyles } from "../styles/bodyStyles";
import { Link } from "react-router-dom";

export default () => {
  const styles = headbandStyles();

  // const togglePort = () => {
  //   props.setPortIsOpen(!props.portOpen);
  // };

  // const scrollToRef = ref => {
  //   window.scrollTo({
  //     top: ref,
  //     left: 0,
  //     behavior: "smooth"
  //   });
  // };

  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      className={styles.headband}
    >
      <Grid container item justify="center" className={styles.headbandcard1}>
        <Grid item xs={8} className={styles.headbandtext1}>
          Hi. I'm Rory. I'm a Full Stack Human, Web Developer and Software Engineer.
        </Grid>
      </Grid>
      <Grid container item justify="center" className={styles.headbandcard2}>
        <Grid item xs={8} className={styles.headbandtext2}>
          I'm really glad you stopped by. Please change directories into my portfolio folder below, or make another navigation selection from the top menu bar.
        </Grid>
      </Grid>
      <Grid item>
        <Link
          to="/portfolio"
          className={styles.headbandLink}
          style={{ textDecoration: "none" }}
        >
          <div className={styles.headbandBtn}>$ cd murray/portfolio</div>
        </Link>
      </Grid>
    </Grid>
  );
};
