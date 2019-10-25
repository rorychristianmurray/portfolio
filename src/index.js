import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./fonts/American-Typewriter-Regular.ttf";

const AppWithRouter = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(AppWithRouter, document.getElementById("root"));
