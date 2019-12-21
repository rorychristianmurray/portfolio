import { makeStyles } from "@material-ui/styles";

export const navStyles = makeStyles({
  navwrap: {
    background: "#000000",
    borderBottom: "2px solid #00ff00",
    borderRadius: 2,
    height: 30,
    position: "fixed",
    zIndex: 1,
    fontFamily: "Classic Console",
  },
  navtext: {
    color: "#00ff00",
    fontSize: "1.8rem",
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
