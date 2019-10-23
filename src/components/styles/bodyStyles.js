import { makeStyles } from "@material-ui/styles";

export const headbandStyles = makeStyles({
  headband: {
    height: 200,
    background: "#000000"
  },
  headbandcard: {
    margin: 20
  },
  headbandtext: {
    color: "#F18F01"
  },
  line: {
    background: "red",
    color: "red"
  }
});

export const portfolioStyles = makeStyles({
  portfolio: {
    // border: "1px solid #F18F01",
    background: "#000000"
    // border: "1px solid red"
  },
  project: {
    background: "#000000",
    borderTop: "1px solid rgba(228, 87, 46, 0.7)",
    marginTop: 30,
    marginBottom: 30
    // borderRadius: 25
    // "&:hover": {
    //   boxShadow: "0px 5px 10px #F18F01",
    //   transform: "translateX(-5px)"
    // }
  },
  title: {
    // border: "1px solid red",
    margin: 10
  },
  projDetails: {
    // border: "1px solid red",
    margin: 10
  },
  projectDetailsText: {
    color: "#F18F01"
  },
  projectTitleText: {
    color: "#F18F01",
    fontWeight: 800
  },
  projButton: {
    background: "#F18F01",
    margin: 10,
    "&:hover": {
      background: "#F18F01"
      // color: "#E4572E"
    }
  }
});
