import React from "react";
import { Grid } from "@material-ui/core";

export default props => {
  const [id, setId] = React.useState(0);
  //   console.log("ProjectShowcase props", props);
  //   console.log(
  //     "ProjectShowcase props.location.pathname",
  //     props.location.pathname
  //   );
  //   console.log("ProjectShowcase id", id);

  const regCheck = new RegExp("check", "gi");
  console.log("ProjectShowcase regCheck", regCheck);

  // slice string

  let loc = props.location.pathname.slice(9);
  console.log("ProjectShowcase loc", loc);

  return (
    <Grid container>
      <Grid item>Project details incoming</Grid>
    </Grid>
  );
};
