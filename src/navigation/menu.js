import React, { useContext } from "react";
import { MenuContext } from "../store/menu";
import { motion, AnimatePresence } from "framer-motion";
export default function Menu() {
  const { active, setActive } = useContext(MenuContext);
  const Parent = {
    exit: {
      height: 0,
      transition: {
        ease: "easeInOut",
        when: "afterChildren",
        staggerChildren: 0.2
      }
    },
    enter: {
      height: "100vh",
      transition: {
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  const Child = {
    exit: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    initial: {
      opacity: 0
    }
  };
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="w-screen absolute bg-black"
          variants={Parent}
          exit="exit"
          animate="enter"
          style={{ zIndex: 9999 }}
        >
          <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ delay: 0.4 }}
            className="border border-white top-0 left-0 absolute h-20 w-20 lg:ml-40 ml-20"
            onClick={() => setActive(!active)}
          >
            <div className="relative h-full w-full flex items-center justify-center">
              <button className="text-white text-5xl font-black w-full h-full">
                {"<"}
              </button>
            </div>
          </motion.div>

          <div className="flex flex-col h-full items-center justify-center align-middle ">
            <div className="flex flex-col items-start">
              <motion.p
                variants={Child}
                initial="initial"
                className="text-white font-black text-5xl relative"
              >
                Home{" "}
              </motion.p>
              <motion.p
                variants={Child}
                initial="initial"
                className="text-white font-black text-5xl"
              >
                Devrebase
              </motion.p>
              <motion.p
                variants={Child}
                initial="initial"
                className="text-white font-black text-5xl"
              >
                Portfolio
              </motion.p>
              <motion.p
                variants={Child}
                initial="initial"
                className="text-white font-black text-5xl"
              >
                Contact
              </motion.p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
