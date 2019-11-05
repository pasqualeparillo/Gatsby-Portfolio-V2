import React from "react";
import SEO from "../components/seo";
import "../css/style.css";
import Index from "../index/index";
import { motion } from "framer-motion";

const IndexPage = props => (
  <React.Fragment>
    <motion.div
      className="lg:w-11/12 w-full flex mx-auto flex-1 overflow-hidden bg-white"
      exit="exit"
      enter="enter"
      initial="exit"
      key={props.location.pathname}
    >
      {console.log(props)}
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Index />
    </motion.div>
  </React.Fragment>
);

export default IndexPage;
