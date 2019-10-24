import React from "react";
import { Redirect } from "react-router-dom";
import { Grid, Button } from "@material-ui/core";
import { headbandStyles } from "../styles/bodyStyles";
import { Link } from "react-router-dom";

export default props => {
  const styles = headbandStyles();
  console.log("Info props", 1 + 1);

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
          Hi. I'm Rory. I'm a Full Stack Web Developer.
        </Grid>
      </Grid>
      <Grid container item justify="center" className={styles.headbandcard2}>
        <Grid item xs={8} className={styles.headbandtext2}>
          Lorem Ipsum
        </Grid>
      </Grid>
      <Grid item>
        <Link
          to="/portfolio"
          className={styles.headbandLink}
          style={{ textDecoration: "none" }}
        >
          <Button className={styles.headbandBtn}>Portfolio</Button>
        </Link>
      </Grid>
    </Grid>
  );
};
