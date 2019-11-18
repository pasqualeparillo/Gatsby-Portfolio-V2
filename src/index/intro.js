import React from "react";
import Aside from "./aside";
import { motion } from "framer-motion";
import IntroAnimation from "./introAnimation";

const parent = {
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  },
  initial: {
    opacity: 0
  }
};
const child = {
  exit: {
    y: 300,
    transition: {
      ease: "easeInOut",
      duration: 0.4
    }
  },
  enter: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4
    }
  }
};
const childTwo = {
  exit: {
    y: 300,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      delay: 0.1
    }
  },
  enter: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      delay: 0.1
    }
  }
};
const childThree = {
  exit: {
    y: 300,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      delay: 0.2
    }
  },
  enter: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      delay: 0.2
    }
  }
};
const childFour = {
  exit: {
    y: 300,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      delay: 0.3
    }
  },
  enter: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      delay: 0.3
    }
  }
};
const childFive = {
  exit: {
    y: 300,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      delay: 0.4
    }
  },
  enter: {
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.4,
      delay: 0.4
    }
  }
};
export default function Intro() {
  return (
    <div className="flex flex-wrap flex-grow relative lg:flex-row">
      <div className="lg:w-3/5 w-full lg:h-full h-64 lg:border-b-0 border-b border-black">
        <motion.div
          variants={parent}
          className="w-full h-full flex flex-wrap relative"
        >
          <div className="flex flex-col justify-center w-full items-start relative overflow-hidden p-1">
            <motion.p
              className="font-black tracking-tighter uppercase absolute z-20 text-blue-800 lg:text-9vw md:text-13vw text-18vw"
              style={{
                lineHeight: 0.9,
                transform: "translateY(-10%)"
              }}
              variants={child}
              initial={{ y: 300 }}
            >
              Developer
              <IntroAnimation
                text={"Developer"}
                variant={child}
                color={"text-green-600"}
              />
              <IntroAnimation
                text={"Developer"}
                variant={childTwo}
                color={"text-yellow-600"}
              />
              <IntroAnimation
                text={"Developer"}
                variant={childThree}
                color={"text-blue-600"}
              />
              <IntroAnimation
                text={"Developer"}
                variant={childFour}
                color={"text-red-600"}
              />
              <IntroAnimation
                text={"Developer"}
                variant={childFive}
                color={"text-black"}
              />
            </motion.p>
          </div>
          <div className="flex flex-col justify-center w-full items-end relative overflow-hidden">
            <motion.p
              className="font-black tracking-tighter uppercase absolute text-blue-800 lg:text-9vw md:text-13vw text-18vw"
              style={{
                lineHeight: 0.9,
                transform: "translateY(-10%)"
              }}
              variants={child}
              initial={{ y: 300 }}
            >
              from
              <IntroAnimation
                text={"from"}
                variant={child}
                color={"text-green-600"}
              />
              <IntroAnimation
                text={"from"}
                variant={childTwo}
                color={"text-yellow-600"}
              />
              <IntroAnimation
                text={"from"}
                variant={childThree}
                color={"text-blue-600"}
              />
              <IntroAnimation
                text={"from"}
                variant={childFour}
                color={"text-red-600"}
              />
              <IntroAnimation
                text={"from"}
                variant={childFive}
                color={"text-black"}
              />
            </motion.p>
          </div>
          <div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
            <motion.p
              className="font-black tracking-tighter uppercase absolute text-blue-800 lg:text-9vw md:text-13vw text-18vw"
              style={{
                lineHeight: 0.9,
                transform: "translateY(-10%)"
              }}
              variants={child}
              initial={{ y: 300 }}
            >
              Seattle
              <IntroAnimation
                text={"Seattle"}
                variant={child}
                color={"text-green-600"}
              />
              <IntroAnimation
                text={"Seattle"}
                variant={childTwo}
                color={"text-yellow-600"}
              />
              <IntroAnimation
                text={"Seattle"}
                variant={childThree}
                color={"text-blue-600"}
              />
              <IntroAnimation
                text={"Seattle"}
                variant={childFour}
                color={"text-red-600"}
              />
              <IntroAnimation
                text={"Seattle"}
                variant={childFive}
                color={"text-black"}
              />
            </motion.p>
          </div>
        </motion.div>
      </div>
      <Aside />
    </div>
  );
}
