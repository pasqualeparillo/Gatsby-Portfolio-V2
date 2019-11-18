import React from "react";
import Intro from "./intro";
import ProjectInfo from "./projectInfo";
import "./index.css";
export default function Project() {
  return (
    <div className="flex flex-col flex-1">
      <Intro />
      <ProjectInfo />
    </div>
  );
}
