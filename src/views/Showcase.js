import React from "react";
import ProjectShowcase from "../components/body/ProjectShowcase";
import Nav from "../components/navigation/Nav";

export default props => {
  return (
    <div className="showcase-wrapper">
      <Nav />
      <ProjectShowcase {...props} />
    </div>
  );
};
