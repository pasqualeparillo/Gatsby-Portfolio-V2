import React from "react";
import Intro from "./intro";
import Projects from "./projects";
import { Link } from "gatsby";
import "./index.css";
export default function Index() {
  return (
    <div className="flex flex-col flex-1 ">
      <Intro />
      <Projects />
    </div>
  );
}
