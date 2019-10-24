import { makeStyles } from "@material-ui/styles";

export const headbandStyles = makeStyles({
  headband: {
    height: "auto"
    // background: "#000000"
  },
  headbandcard1: {
    marginTop: 90,
    marginBottom: 20
    // border: "1px solid red"
  },
  headbandcard2: {
    marginTop: 20,
    marginBottom: 20
    // border: "1px solid red"
  },
  headbandtext1: {
    color: "#F18F01"
    // marginTop: 40
    // border: "1px solid red"
  },
  headbandtext2: {
    color: "#F18F01"
    // border: "1px solid red"
    // marginTop: 40
  },
  line: {
    background: "red",
    color: "red"
  },
  headbandBtn: {
    background: "#F18F01",
    marginTop: 50,
    marginBottom: 100,
    textDecoration: "none",
    "&:hover": {
      background: "#F18F01"
      // color: "#E4572E"
    },
    headbandLink: {
      textDecoration: "none"
    }
  }
});

export const portfolioStyles = makeStyles({
  portfolio: {
    // border: "1px solid #F18F01",
    // background: "#000000"
    // border: "1px solid red"
  },
  project: {
    // background: "#000000",
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

export const showcaseStyles = makeStyles({
  project: {
    height: 300,
    // background: "#000000",
    border: "1px solid red",
    paddingTop: 30
  },
  title: {
    marginTop: 10,
    marginBottom: -40
  },
  projDetails: {
    marginBottom: 10
  },
  projectDetailsText: {
    color: "#F18F01"
  },
  projectTitleText: {
    color: "#F18F01",
    fontWeight: 800
  }
});
