import React from "react";
import Footer from "./footer";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
const parent = {
  exit: {
    opacity: 1,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2
    }
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerDirection: -1,
      staggerChildren: 0.2
    }
  }
};
const child = {
  exit: {
    y: "100%",
    transition: {
      delay: 0.4,
      duration: 0.4
    }
  },
  enter: {
    y: 0,
    transition: {
      delay: 0.4,
      duration: 0.4
    }
  }
};
const childTwo = {
  exit: {
    y: "100%",
    transition: {
      duration: 0.4
    }
  },
  enter: {
    y: 0,
    transition: {
      duration: 0.4
    }
  }
};
export default function ProjectInfo() {
  return (
    <motion.div
      className="flex flex-wrap w-full font-roboto h-80 border-black border-l"
      variants={parent}
    >
      <div className="bottom-0 lg:w-3/5 w-full flex flex-col flex-wrap relative bg-white border-black border-t border-r">
        <MediaQuery minWidth={992}>
          <motion.p
            className="uppercase font-black tracking-tight leading-none absolute right-0 p-4 -mt-12 bg-black text-white z-10"
            style={{ marginRight: "-1px" }}
            variants={child}
          >
            Live Site
          </motion.p>
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <motion.p
            className="uppercase font-black tracking-tight h-16 leading-none absolute right-0 p-4 -mt-16 bg-black text-white flex items-center z-10"
            variants={child}
          >
            Live Site
          </motion.p>
        </MediaQuery>
        <motion.div
          className="min-w-full flex justify-between z-50 bg-white h-full"
          variants={parent}
        >
          <Info />
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}

function Info() {
  return (
    <motion.div
      className="h-full flex flex-1 relative bg-white pt-4 px-4 w-full flex flex-col w-3/4 py-4"
      variants={childTwo}
      initial="exit"
    >
      <div className="w-full flex ">
        <p className="uppercase font-black py-2 mr-4">Title:</p>
        <p className="uppercase py-2">Devrebase</p>
      </div>
      <div className="w-full flex ">
        <p className="uppercase font-black py-2 mr-4">Type:</p>
        <p className="uppercase  py-2">Fullstack</p>
      </div>
      <div className="w-full flex flex-col ">
        <p className="uppercase font-black py-2">Stack:</p>
        <p className="uppercase py-2 text-xs">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>
    </motion.div>
  );
}
