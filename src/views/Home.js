import React from "react";
import Portfolio from "../components/body/Portfolio";
import Nav from "../components/navigation/Nav";
import Footer from "../components/footer/Footer";

export default () => {
  return (
    <div className="home-wrapper">
      <Nav />
      <Portfolio />
      <Footer />
    </div>
  );
};
