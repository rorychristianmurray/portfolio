import React from "react";
import { project } from "../../api/data";
import { Grid, Typography, Button } from "@material-ui/core";
import { showcaseStyles } from "../styles/bodyStyles";

export default props => {
  const [id, setId] = React.useState(props.location.pathname.slice(9));
  const [showcase, setShowcase] = React.useState(
    project.filter(project => project.id === id)[0]
  );

  const styles = showcaseStyles();

  const { title, details } = showcase;

  console.log("ProjectShowcase props", props);
  console.log("ProjectShowcase id", id);
  console.log("ProjectShowcase project", project);
  console.log("ProjectShowcase showcase", showcase);

  return (
    <Grid
      container
      direction="column"
      // justify="center"
      alignItems="center"
      className={styles.project}
    >
      <Grid
        container
        justify="center"
        alignItems="center"
        item
        className={styles.title}
      >
        <Typography variant="subtitle1" className={styles.projectTitleText}>
          {title}
        </Typography>
      </Grid>
      <Grid item className={styles.projDetails}>
        <Typography variant="subtitle1" className={styles.projectDetailsText}>
          {details}
        </Typography>
      </Grid>
      <Grid item>
        <Button className={styles.projBtn}>Code</Button>
      </Grid>
    </Grid>
  );
};
