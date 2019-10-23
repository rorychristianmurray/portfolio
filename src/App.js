import React from "react";
import Home from "./views/Home";
import { Route } from "react-router-dom";

import "./App.css";

function App() {
  console.log("Welcome to my page!");
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
    </div>
  );
}

export default App;
