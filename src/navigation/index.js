import React from "react";
import { motion } from "framer-motion";
export default function NavIndex() {
  return (
    <div className="lg:w-11/12 w-full h-20 flex border-b border-black z-50 overflow-hidden">
      <div className="flex p-6 bg-black justify-center h-20 w-20 ml-20 ">
        <div className="flex flex-col justify-around w-full h-full">
          <span className="w-full h-1 bg-white " />
          <span className="w-full h-1 bg-white " />
          <span className="w-full h-1 bg-white " />
        </div>
      </div>
      <div className="flex items-end justify-end self-end h-full border-r border-l border-black shadow-lg">
        <motion.p
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-black p-4 text-red-600 font-roboto"
        >
          Pasquale Parillo
        </motion.p>
      </div>
    </div>
  );
}
