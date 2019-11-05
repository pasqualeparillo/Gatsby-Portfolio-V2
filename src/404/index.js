import React from "react";
import Intro from "./intro";
import Projects from "./projects";
import { Link } from "gatsby";

export default function Index() {
  return (
    <div className="flex flex-col flex-1 border-r-2 border-l-2 border-black">
      <Link to="/">Index</Link>
      <Intro />
      <Projects />
    </div>
  );
}
