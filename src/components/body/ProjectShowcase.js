import React from "react";
import { Grid } from "@material-ui/core";

export default props => {
  const [id, setId] = React.useState(props.location.pathname.slice(9));
  console.log("ProjectShowcase props", props);
  console.log("ProjectShowcase id", id);

  return (
    <Grid container>
      <Grid item>Project details incoming</Grid>
    </Grid>
  );
};
