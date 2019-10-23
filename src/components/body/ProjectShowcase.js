import React from "react";
import { Grid } from "@material-ui/core";

export default props => {
  console.log("ProjectShowcase props", props);

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
