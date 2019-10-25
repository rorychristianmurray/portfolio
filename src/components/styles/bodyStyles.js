import { makeStyles } from "@material-ui/styles";

export const headbandStyles = makeStyles({
  headband: {
    height: "auto",
    fontFamily: "American Typewriter"
    // background: "#000000"
  },
  headbandcard1: {
    marginTop: 90,
    marginBottom: 20
  },
  headbandcard2: {
    marginTop: 20,
    marginBottom: 20
  },
  headbandtext1: {
    color: "#F18F01"
  },
  headbandtext2: {
    color: "#F18F01"
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
    // fontFamily: "American Typewriter",
    "&:hover": {
      background: "#F18F01"
      // color: "#E4572E"
    },
    headbandLink: {
      textDecoration: "none"
    },
    pic: {
      height: 200,
      width: 100,
      border: "10px solid red"
    }
  }
});

export const portfolioStyles = makeStyles({
  project: {
    // background: "#000000",
    borderTop: "1px solid rgba(228, 87, 46, 0.7)",
    marginTop: 30,
    marginBottom: 30,
    fontFamily: "American Typewriter"
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
    color: "#F18F01",
    fontFamily: "American Typewriter"
  },
  projectTitleText: {
    color: "#F18F01",
    fontWeight: 800,
    fontFamily: "American Typewriter"
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
    // border: "1px solid red",
    height: 500,
    // background: "#000000",
    paddingTop: 30,
    fontFamily: "American Typewriter"
  },
  title: {
    marginTop: 10,
    // marginBottom: -40,
    // border: "1px solid red",
    maxWidth: "40%",
    marginBottom: 30
  },
  projDetails: {
    maxWidth: "40%",
    marginBottom: 10
    // border: "1px solid red",
  },
  projectTitleText: {
    color: "#F18F01",
    fontWeight: 800,
    fontFamily: "American Typewriter"
  },
  projectDetailsText: {
    color: "#F18F01",
    fontFamily: "American Typewriter"
  },
  projBtn: {
    // border: "1px solid red",
    background: "#F18F01",
    margin: 10,
    paddingLeft: 20,
    paddingRight: 20,
    "&:hover": {
      background: "#F18F01"
      // color: "#E4572E"
    }
  }
});

export const infoStyles = makeStyles({
  infoband: {
    height: "auto"
  },
  infocard1: {
    marginTop: 70,
    marginBottom: 20
  },
  infocard2: {
    marginTop: 20,
    marginBottom: 20,
    color: "#F18F01"
  },
  infotext1: {
    color: "#F18F01"
  },
  headbandtext2: {
    color: "#F18F01"
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
    },
    headbandLink: {
      textDecoration: "none"
    },
    murrpic: {
      margin: 50
    }
  }
});
