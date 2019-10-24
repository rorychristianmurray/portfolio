import React from "react";
import Home from "./views/Home";
import Showcase from "./views/Showcase";
import Port from "./views/Port";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  console.log("Welcome to my page!");
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" render={props => <Port {...props} />} />
      <Route path="/project" render={props => <Showcase {...props} />} />
    </div>
  );
}

export default App;
