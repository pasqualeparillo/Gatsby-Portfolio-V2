import React from "react";
import SEO from "../components/seo";
import Index from "../404/index";
import { motion } from "framer-motion";
const NotFoundPage = props => (
  <motion.div
    className="lg:w-11/12 w-full flex mx-auto flex-1 overflow-hidden bg-white"
    exit="exit"
    enter="enter"
    initial="exit"
    key={props.location.pathname}
  >
    {console.log(props)}
    <SEO title="404: Not found" />
    <Index />
  </motion.div>
);

export default NotFoundPage;
