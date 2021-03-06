import React from "react";
import Aside from "./aside";
import { motion } from "framer-motion";

const parent = {
  exit: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

export default function Intro() {
  return (
    <div className="flex flex-wrap flex-grow relative lg:flex-row">
      <div className="lg:w-3/5 w-full lg:h-full h-64 lg:border-b-0 border-b border-black">
        <motion.div
          variants={parent}
          className="w-full h-full flex flex-wrap p-2"
        >
          <div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
            <p>test</p>
          </div>
        </motion.div>
      </div>
      <Aside />
    </div>
  );
}
