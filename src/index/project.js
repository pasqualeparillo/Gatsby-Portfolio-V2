import React, { useState } from "react";
import { motion } from "framer-motion";
import { navigate } from "gatsby";

const childTwo = {
  exit: {
    y: "100%",
    transition: {
      duration: 0.4,
      type: "spring",
      mass: 1,
      damping: 40
    }
  },
  enter: {
    y: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      mass: 1,
      damping: 40
    }
  }
};

export default function Project({ description, name, type, link }) {
  const [hovered, setIsHovered] = useState(false);
  return (
    <motion.div
      className="h-full flex flex-1 border-r-last-child border-black border-t border-l relative bg-white cursor-pointer"
      style={{ marginTop: "-1px", marginLeft: "-1px" }}
      variants={childTwo}
      initial="exit"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigate(`${link}`)}
    >
      <motion.div
        className="absolute left-0 top-0 bottom-0 bg-black"
        animate={hovered ? { width: "1rem" } : { width: "0rem" }}
      />
      <div className="pt-4 lg:px-10 px-2 w-full">
        <div className="w-full flex flex-wrap ">
          <div className="w-full flex flex-wrap justify-start">
            <div className="w-1/2 flex justify-start">
              <p className="font-black uppercase leading-none tracking-widest py-2 lg:text-base md:text-base text-xxs font-bebas">
                Name:
              </p>
            </div>
            <div className="w-1/2 flex justify-start">
              <p className="uppercase leading-none tracking-normal py-2 -ml-2 lg:text-base md:text-base text-xxs font-fira">
                {name}
              </p>
            </div>
          </div>

          <div className="w-full flex flex-wrap justify-start">
            <div className="w-1/2 flex justify-start">
              <p className="font-black uppercase leading-none tracking-widest py-2 lg:text-base md:text-base text-xxs font-bebas">
                Type:
              </p>
            </div>
            <div className="w-1/2 flex justify-start">
              <p className="uppercase leading-none tracking-normal py-2 -ml-2 lg:text-base md:text-base text-xxs  font-fira">
                {type}
              </p>
            </div>
          </div>
          <div className="border-b border-black w-1/2 mt-6 mb-6" />
        </div>
        <div className="h-20 w-full">
          <p className="leading-normal tracking-normal font-fira">
            {description}
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
    </motion.div>
  );
}
