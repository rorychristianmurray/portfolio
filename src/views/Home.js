import React, { useState } from "react";
import Headband from "../components/body/Headband.js";
import Portfolio from "../components/body/Portfolio";
import Nav from "../components/navigation/Nav";
import Footer from "../components/navigation/Footer";

export default () => {
  const [portOpen, setPortIsOpen] = useState(false);
  console.log("Home portOpen", portOpen);

  return (
    <div className="home-wrapper">
      <Nav />
      <Headband portOpen={portOpen} setPortIsOpen={setPortIsOpen} />
      <Portfolio />
      <Footer />
    </div>
  );
};
