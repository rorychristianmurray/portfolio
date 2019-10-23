import React from "react";
import ProjectShowcase from "../components/body/ProjectShowcase";

export default props => {
  return (
    <div className="showcase-wrapper">
      <ProjectShowcase {...props} />
    </div>
  );
};
