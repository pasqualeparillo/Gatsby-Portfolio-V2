import React from "react";
import paginationHook from "./paginationHook";
import MediaQuery from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";

const parent = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.6
    }
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 1
    }
  }
};

export function Carousel() {
  const { currentImage } = paginationHook();
  return (
    <motion.div
      className="flex flex-grow h-full w-full flex-1 overflow-hidden relative"
      variants={parent}
    >
      <MediaQuery minWidth={992}>
        <AnimatePresence>
          <motion.img
            className="bg-contain w-full absolute"
            style={{ height: "calc(100vh - 21rem)" }}
            key={currentImage}
            exit={{ opacity: 0 }}
            enter={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            src={currentImage}
          />
        </AnimatePresence>
      </MediaQuery>
      <MediaQuery maxWidth={992}>
        <AnimatePresence>
          <motion.img
            className="bg-contain w-full absolute h-full"
            key={currentImage}
            exit={{ opacity: 0 }}
            enter={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            src={currentImage}
          />
        </AnimatePresence>
      </MediaQuery>
    </motion.div>
  );
}
