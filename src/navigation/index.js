import React, { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigate } from "gatsby";
import { MenuContext } from "../store/menu";
export default function NavIndex({ location }) {
  const { active, setActive } = useContext(MenuContext);
  return (
    <div className="lg:w-11/12 w-full h-20 flex z-50 overflow-hidden">
      <div className="w-20 h-20 flex flex-col items-center justify-center">
        <AnimatePresence>
          {location.pathname !== "/" ? (
            <motion.div
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full h-full flex flex cursor-pointer"
              onClick={() => navigate("/")}
            >
              <motion.div
                className="w-full h-full flex flex-col justify-center items-center content-center border-l border-b border-black"
                initial={{ color: "#ffffff", backgroundColor: "#000000" }}
                whileHover={{ color: "#000000", backgroundColor: "#ffffff" }}
              >
                <p className="text-5xl font-black font-fira">{"<"}</p>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <div
        className="flex p-6 bg-black justify-center h-20 w-20 cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <div className="flex flex-col justify-around w-full h-full">
          <span className="w-full h-1 bg-white " />
          <span className="w-3/4 h-1 bg-white " />
          <span className="w-1/2 h-1 bg-white " />
        </div>
      </div>
      <div className="flex items-center justify-end text-right h-full ">
        <motion.p
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.4, type: "spring", mass: 2, damping: 100 }}
          className="text-2xl p-4 font-fira cursor-pointer"
        >
          Pasquale Parillo
        </motion.p>
      </div>
    </div>
  );
}
