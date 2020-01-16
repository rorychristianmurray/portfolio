import React from "react";
import { Redirect } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import { headbandStyles } from "../styles/bodyStyles";
import { Link } from "react-router-dom";

export default props => {
  const styles = headbandStyles();
  console.log("Headband props", props);

  const togglePort = () => {
    props.setPortIsOpen(!props.portOpen);
  };

  const scrollToRef = ref => {
    window.scrollTo({
      top: ref,
      left: 0,
      behavior: "smooth"
    });
  };

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
          Hi. I'm Rory. I'm a Full Stack Human as well as a Web Developer and Software Engineer during about
          1/2 to 2/3 of the preponderance of my days.
        </Grid>
      </Grid>
      <Grid container item justify="center" className={styles.headbandcard2}>
        <Grid item xs={8} className={styles.headbandtext2}>
          I'm really glad you stopped by. I made this site to speak to and show
          a bit of what I like to do. If you think it might intersect a bit with
          what you like to do, or you just wanna know more I'd love to hear from
          you.
        </Grid>
      </Grid>
      <Grid item>
        <Link
          to="/portfolio"
          className={styles.headbandLink}
          style={{ textDecoration: "none" }}
        >
          <Button className={styles.headbandBtn}>$ cd murray/portfolio</Button>
        </Link>
      </Grid>
    </Grid>
  );
};
