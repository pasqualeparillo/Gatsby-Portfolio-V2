import React from "react";
import { motion } from "framer-motion";
import MediaQuery from "react-responsive";
import Footer from "./footer";
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
export default function ProjectWrap({ children, text }) {
  return (
    <motion.div className="flex flex-wrap w-full lg:h-80" variants={parent}>
      <div className="bottom-0 lg:w-3/5 w-full flex flex-col flex-wrap relative bg-white ">
        <MediaQuery minWidth={992}>
          <motion.p
            className="uppercase font-black tracking-widest leading-none absolute right-0 p-4 -mt-12 bg-black text-white z-10 font-bebas"
            variants={child}
          >
            {text}
          </motion.p>
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <motion.p
            className="uppercase font-black tracking-widest h-12 leading-none absolute right-0 p-4 -mt-12 bg-black text-white flex items-center z-10 font-bebas"
            variants={child}
          >
            {text}
          </motion.p>
        </MediaQuery>
        <motion.div
          className="border-t lg:border-l lg:border-r border-black min-w-full flex justify-between z-50 bg-white h-full"
          variants={parent}
        >
          {children}
        </motion.div>
      </div>
      <Footer />
    </motion.div>
  );
}
