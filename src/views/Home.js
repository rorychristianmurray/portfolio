import React from "react";
import Headband from "../components/body/Headband.js";
import Portfolio from "../components/body/Portfolio";
import Nav from "../components/navigation/Nav";
import Footer from "../components/navigation/Footer";

export default () => {
  return (
    <div className="home-wrapper">
      <Nav />
      <Headband />
      <Portfolio />
      <Footer />
    </div>
  );
};
