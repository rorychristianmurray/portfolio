import { makeStyles } from "@material-ui/styles";



export const headbandStyles = makeStyles({
  headband: {
    height: "auto",
    fontFamily: "Classic Console"
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
    // color: "#F18F01",
    color: "#00ff00",
    fontSize: "1.8rem"
  },
  headbandtext2: {
    color: "#00ff00",
    fontSize: "1.8rem"
  },
  line: {
    background: "red",
    color: "red"
  },
  headbandBtn: {
    background: "#000000",
    color: "#00ff00",
    marginTop: 50,
    marginBottom: 100,
    textDecoration: "none",
    fontFamily: "Classic Console",
    fontSize: "1.8rem",
    // fontFamily: "American Typewriter",
    "&:hover": {
      background: "#00ff00",
      color: "#000000"
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
    borderTop: "1px solid rgba(0, 255, 0, 0.7)",
    marginTop: 30,
    marginBottom: 20,
    fontFamily: "Classic Console",

  },
  title: {
    margin: 10
  },
  projDetails: {
    margin: 10
  },
  projectDetailsText: {
    color: "#00ff00",
    fontFamily: "Classic Console",
    fontSize: "1.4rem",
    // marginBottom: 20
  },
  projectStack: {
    color: "#00ff00",
    fontFamily: "Classic Console",
    fontSize: "1.4rem",
    marginTop: 20,
    marginBottom: 40
  },
  projectTitleText: {
    color: "#00ff00",
    fontWeight: 800,
    fontFamily: "Classic Console",
    fontSize: "1.8rem"
  },
  projButton: {
    background: "#000000",
    color: "#00ff00",
    fontFamily: "Classic Console",
    margin: 10,
    fontSize: "1.8rem",
    "&:hover": {
      background: "#00ff00",
      color: "#000000"
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

    maxWidth: "40%",
    marginBottom: 30
  },
  projDetails: {
    maxWidth: "40%",
    marginBottom: 10

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
    textDecoration: "none",
    "&:hover": {
      background: "#F18F01"
    
    }
  }
});

export const infoStyles = makeStyles({
  infoband: {
    height: "auto",
    fontFamily: "Classic Console"

  },
  infocard1: {
    marginTop: 70,
    marginBottom: 20
  },
  infocard2: {
    // marginTop: 20,
    // marginBottom: 20,
    color: "#00ff00",
    fontSize: "1.4rem",
    fontFamily: "Classic Console",
  },
  skillcard: {
    // marginTop: 20,
    marginBottom: 50,
    color: "#00ff00",
    fontSize: "1.4rem",
    fontFamily: "Classic Console",
  },
  infotext1: {
    color: "#00ff00"
  },
  headbandtext2: {
    color: "#00ff00"
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
