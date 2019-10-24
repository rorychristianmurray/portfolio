import { makeStyles } from "@material-ui/styles";

export const navStyles = makeStyles({
  navwrap: {
    background: "#000000",
    borderBottom: "2px solid #E4572E",
    borderRadius: 2,
    height: 30,
    position: "fixed",
    zIndex: 1
  },
  navtext: {
    color: "#F18F01",
    // border: "1px solid #E4572E",
    marginRight: 30
  },
  navlink: {
    textDecoration: "none"
  },
  navfootie: {
    // background: "#000000",
    borderTop: "2px solid #E4572E",
    borderRadius: 2,
    height: 30
  }
});
