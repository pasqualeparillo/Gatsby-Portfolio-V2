import React from "react";
import SEO from "../components/seo";
import "../css/style.css";
import Project from "../project/index";

const ContactPage = () => (
  <div className="w-full flex mx-auto flex-1 overflow-hidden bg-white relative">
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Project />
  </div>
);

export default ContactPage;
