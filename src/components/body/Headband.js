import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { headbandStyles } from "./BodyStyles";

export default () => {
  const styles = headbandStyles();
  return (
    <Paper>
      <Grid
        container
        justify="center"
        direction="column"
        alignItems="center"
        className={styles.headband}
      >
        <Grid container justify="center" item className={styles.headbandcard}>
          <Grid item xs={8} className={styles.headbandtext}>
            Hi. I'm Rory. I'm a Full Stack Human and a Web Developer during
            about 1/2 to 2/3 of the preponderance of my days.
          </Grid>
        </Grid>
        <Grid container justify="center" item className={styles.headbandcard}>
          <Grid item xs={8} className={styles.headbandtext}>
            I'm really glad you stopped by. I made this site to speak to and
            show a bit of what I like to do. If you think it might intersect a
            bit with what you like to do, or you just wanna know more I'd love
            to hear from you (about anything, really) here.
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};
