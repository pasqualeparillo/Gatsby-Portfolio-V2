import React from "react";
import Aside from "./aside";
import { motion } from "framer-motion";

const parent = {
  from: {
    opacity: 0
  },
  to: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};
const child = {
  from: {
    y: "100%"
  },
  to: {
    y: -10,
    transition: {
      duration: 0.4
    }
  }
};
export default function Intro() {
  return (
    <div className="flex flex-wrap flex-grow relative  lg:flex-row">
      <div className="lg:w-3/5 w-full lg:h-full h-64 lg:border-r-2 lg:border-b-0 border-b-2 border-black">
        <motion.div
          variants={parent}
          initial="from"
          animate="to"
          className="w-full h-full flex flex-wrap p-2"
        >
          <div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
            <motion.p
              className="font-black tracking-tighter uppercase absolute"
              style={{
                fontSize: "10vw",
                lineHeight: 0.9,
                transform: "translateY(-10%)"
              }}
              variants={child}
            >
              Developer
            </motion.p>
          </div>
          <div className="flex flex-col justify-center w-full items-end relative overflow-hidden">
            <motion.p
              className="font-black tracking-tighter uppercase absolute"
              style={{
                fontSize: "10vw",
                lineHeight: 0.9,
                transform: "translateY(-10%)"
              }}
              variants={child}
            >
              from
            </motion.p>
          </div>
          <div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
            <motion.p
              className="font-black tracking-tighter uppercase absolute"
              style={{
                fontSize: "10vw",
                lineHeight: 0.9,
                transform: "translateY(-10%)"
              }}
              variants={child}
            >
              Seattle
            </motion.p>
          </div>
        </motion.div>
      </div>
      <Aside />
    </div>
  );
}
