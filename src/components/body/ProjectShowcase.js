import React from "react";
import { project } from "../../api/data";
import { Grid, Typography, Button } from "@material-ui/core";
import { portfolioStyles } from "../styles/bodyStyles";

export default props => {
  const [id, setId] = React.useState(props.location.pathname.slice(9));
  const styles = portfolioStyles();
  console.log("ProjectShowcase props", props);
  console.log("ProjectShowcase id", id);
  console.log("ProjectShowcase project", project);

  //   const thisProj = project.filter(project => project.id === id);
  //   console.log("ProjectShowcase thisProj[0]", thisProj[0]);
  const [showcase, setShowcase] = React.useState(
    project.filter(project => project.id === id)[0]
  );

  //   setShowcase(thisProj[0]);

  //   setShowcase({
  //     id: thisProj[0].id,
  //     title: thisProj[0].title,
  //     details: thisProj[0].details
  //   });
  console.log("ProjectShowcase showcase", showcase);

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
          {/* {title} */}derp
        </Typography>
      </Grid>
      <Grid item xs={8} className={styles.projDetails}>
        <Typography variant="subtitle1" className={styles.projectDetailsText}>
          {/* {details} */}
        </Typography>
      </Grid>
    </Grid>
  );
};
