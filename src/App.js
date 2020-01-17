import React from "react";
import Home from "./views/Home";
import Showcase from "./views/Showcase";
import Port from "./views/Port";
import InfoView from "./views/InfoView";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  console.log("You matter.");
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" render={props => <Port {...props} />} />
      <Route path="/project" render={props => <Showcase {...props} />} />
      <Route path="/info" render={props => <InfoView {...props} />} />
    </div>
  );
}

export default App;
