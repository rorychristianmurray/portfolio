import React from "react";
import { Grid } from "@material-ui/core";

export default props => {
  const [id, setId] = React.useState(0);
  console.log("ProjectShowcase props", props);
  console.log("ProjectShowcase id", id);

  const checker = function() {
    console.log("ProjectShowcase window", window);
  };
  return (
    <Grid container>
      <Grid item onClick={checker}>
        Project details incoming
      </Grid>
    </Grid>
  );
};
