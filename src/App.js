import React from "react";
import Portfolio from "./components/body/Portfolio";
import Nav from "./components/navigation/Nav";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
