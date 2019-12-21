import React from "react";
// import { Redirect } from "react-router-dom";
import { Grid,Typography } from "@material-ui/core";
import { infoStyles } from "../styles/bodyStyles";
// import { Link } from "react-router-dom";
import murrpic from "../../assets/murraypic2.jpg";

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
        development opportunities. I can be reached at rory.christian.murray@gmail.com.
        </Typography>
      </Grid>
      {/* <Grid item>
        <Link
          to="/portfolio"
          className={styles.headbandLink}
          style={{ textDecoration: "none" }}
        >
          <Button className={styles.headbandBtn}>Portfolio</Button>
        </Link>
      </Grid> */}
    </Grid>
  );
};
