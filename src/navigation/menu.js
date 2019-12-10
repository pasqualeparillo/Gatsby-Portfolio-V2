import React, { useContext } from "react";
import { MenuContext } from "../store/menu";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";

export default function Menu() {
  const { active, setActive } = useContext(MenuContext);
  const Parent = {
    initial: {
      height: 0
    },
    exit: {
      height: 0,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.2,
        type: "spring",
        mass: 0.5,
        damping: 200
      }
    },
    enter: {
      height: "100vh",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        type: "spring",
        mass: 0.5,
        damping: 200
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
          className="w-screen overflow-y-hidden absolute bg-black"
          variants={Parent}
          initial="initial"
          exit="exit"
          animate="enter"
          style={{ zIndex: 9999 }}
        >
          <div className="lg:w-11/12 w-full h-20 flex z-50 overflow-hidden relative mx-auto">
            <motion.div
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="border border-white top-0 left-0 absolute h-20 w-20 ml-20"
              onClick={() => setActive(!active)}
            >
              <div className="relative h-full w-full flex items-center justify-center">
                <button className="text-white text-5xl font-black w-full h-full">
                  {"<"}
                </button>
              </div>
            </motion.div>
          </div>
          <div className="flex flex-col h-full items-center justify-center align-middle ">
            <div className="flex flex-col items-start">
              <Link
                className="appearance-none"
                to="/"
                onClick={() => setActive(!active)}
              >
                <motion.p
                  variants={Child}
                  initial="initial"
                  className="text-white font-black text-5xl font-bebas"
                >
                  Home
                </motion.p>
              </Link>
              <Link
                className="appearance-none"
                to="/devrebase"
                onClick={() => setActive(!active)}
              >
                <motion.p
                  variants={Child}
                  initial="initial"
                  className="text-white font-black text-5xl font-bebas"
                >
                  Devrebase
                </motion.p>
              </Link>
              <Link
                className="appearance-none"
                to="/portfolio"
                onClick={() => setActive(!active)}
              >
                <motion.p
                  variants={Child}
                  initial="initial"
                  className="text-white font-black text-5xl font-bebas"
                >
                  Portfolio
                </motion.p>
              </Link>
              <Link
                className="appearance-none"
                to="/example"
                onClick={() => setActive(!active)}
              >
                <motion.p
                  variants={Child}
                  initial="initial"
                  className="text-white font-black text-5xl font-bebas"
                >
                  Example
                </motion.p>
              </Link>
              <Link
                className="appearance-none"
                to="/contact"
                onClick={() => setActive(!active)}
              >
                <motion.p
                  variants={Child}
                  initial="initial"
                  className="text-white font-black text-5xl font-bebas"
                >
                  Contact
                </motion.p>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
