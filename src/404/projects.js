import React, { useState } from "react";
import Footer from "./footer";
import { motion } from "framer-motion";
const parent = {
  exit: {
    opacity: 1,
    transition: {
      when: "afterChildren"
    }
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren"
    }
  }
};
const child = {
  exit: {
    y: "100%",
    transition: {
      duration: 0.4,
      delay: 0.2
    }
  },
  enter: {
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.4
    }
  }
};
export default function Projects() {
  return (
    <motion.div className="flex flex-wrap w-full" variants={parent}>
      <div className="bottom-0 lg:w-3/5 w-full flex flex-col flex-wrap relative">
        <motion.p
          className="uppercase font-black   tracking-tight leading-none absolute right-0 p-4 -mt-12 border-r border-l border-t border-black bg-black text-white z-10"
          variants={child}
        >
          Projects
        </motion.p>
        <div className="border-t border-black w-full flex justify-between z-20">
          {[0, 1, 2].map(id => (
            <Project key={id} />
          ))}
        </div>
      </div>
      <Footer />
    </motion.div>
  );
}

function Project() {
  const [hovered, setIsHovered] = useState(false);
  return (
    <div
      className="w-1/3 h-full border-r border-black relative  bg-white cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 bg-black"
        animate={hovered ? { width: "1rem" } : { width: "0rem" }}
      />
      <div className="pt-6 lg:pl-10 lg:pr-10 pl-6 pr-6 w-full">
        <div className="lg:w-3/4 w-full">
          <p className="font-black uppercase leading-none tracking-tighter  ">
            Have One of your own
          </p>
          <div className="border-b border-black w-1/2 mt-6 mb-6" />
        </div>
        <div className=" h-32 lg:w-3/4 w-full">
          <p className="leading-none tracking-tighter  ">
            Grow a vine in your name
          </p>
        </div>
        <motion.div
          className="h-10 "
          animate={hovered ? { width: "20%" } : { width: "40%" }}
          initial={{ width: "40%" }}
        >
          <div className="h-px bg-black w-full relative ">
            <span
              className="absolute arrow right-0 w-0 h-0"
              style={{
                transform: "translateY(-50%)",
                borderBottom: "5px solid transparent",
                borderLeft: "7.5px solid black",
                borderTop: "5px solid transparent"
              }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
