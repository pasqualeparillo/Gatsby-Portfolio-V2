import React from "react";
import { motion } from "framer-motion";

export default function IntroAnimation({ variant, text, color }) {
  return (
    <motion.span
      className={color + " absolute right-0 z-10"}
      variants={variant}
      style={{
        lineHeight: 0.9,
        transform: "translateY(-10%)"
      }}
      initial={{ y: "100%" }}
      transition={{ type: "spring", mass: 0.5, damping: 200 }}
    >
      {text}
    </motion.span>
  );
}
