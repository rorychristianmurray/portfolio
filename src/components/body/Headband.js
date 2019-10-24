import React from "react";
import { Grid, Button } from "@material-ui/core";
import { headbandStyles } from "../styles/bodyStyles";

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
      <Grid container item justify="center" className={styles.headbandcard}>
        <Grid item xs={8} className={styles.headbandtext}>
          Hi. I'm Rory. I'm a Full Stack Human and a Web Developer during about
          1/2 to 2/3 of the preponderance of my days.
        </Grid>
      </Grid>
      <Grid container item justify="center" className={styles.headbandcard}>
        <Grid item xs={8} className={styles.headbandtext}>
          I'm really glad you stopped by. I made this site to speak to and show
          a bit of what I like to do. If you think it might intersect a bit with
          what you like to do, or you just wanna know more I'd love to hear from
          you (about anything, really) here.
        </Grid>
      </Grid>
      <Grid item>
        <Button
          className={styles.headbandBtn}
          onClick={() => {
            scrollToRef(400);
            togglePort();
          }}
        >
          Portfolio
        </Button>
      </Grid>
    </Grid>
  );
};
