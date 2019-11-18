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
      <div className="w-full lg:h-full h-64 lg:border-b-0 border-b border-black">
        <motion.div
          variants={parent}
          className="w-full h-full flex flex-wrap relative"
        >
          <div className="flex flex-col justify-center w-full items-start relative overflow-hidden p-1">
            <motion.p
              className="font-black tracking-tighter uppercase absolute z-20 text-blue-800 lg:text-8vw md:text-13vw text-18vw leading-none tracking-tighter cursor-pointer"
              style={{
                lineHeight: 0.9,
                transform: "translateY(-10%)"
              }}
              variants={child}
              initial={{ y: 300 }}
            >
              <a className="appearance-none" href="mailto:patparillo@gmail.com">
                Email:
                <IntroAnimation
                  text={"Email:"}
                  variant={child}
                  color={"text-green-600"}
                />
                <IntroAnimation
                  text={"Email:"}
                  variant={childTwo}
                  color={"text-yellow-600"}
                />
                <IntroAnimation
                  text={"Email:"}
                  variant={childThree}
                  color={"text-blue-600"}
                />
                <IntroAnimation
                  text={"Email:"}
                  variant={childFour}
                  color={"text-red-600"}
                />
                <IntroAnimation
                  text={"Email:"}
                  variant={childFive}
                  color={"text-black"}
                />
              </a>
            </motion.p>
          </div>
          <div className="flex flex-col justify-center w-full items-start relative overflow-hidden">
            <motion.p
              className="font-black tracking-tighter uppercase absolute text-blue-800 lg:text-8vw md:text-13vw text-18vw leading-none tracking-tighter"
              style={{
                lineHeight: 0.9,
                transform: "translateY(-10%)"
              }}
              variants={child}
              initial={{ y: 300 }}
            >
              patparillo@gmail.com
              <a className="appearance-none" href="mailto:patparillo@gmail.com">
                <IntroAnimation
                  text={"patparillo@gmail.com"}
                  variant={child}
                  color={"text-green-600"}
                />
                <IntroAnimation
                  text={"patparillo@gmail.com"}
                  variant={childTwo}
                  color={"text-yellow-600"}
                />
                <IntroAnimation
                  text={"patparillo@gmail.com"}
                  variant={childThree}
                  color={"text-blue-600"}
                />
                <IntroAnimation
                  text={"patparillo@gmail.com"}
                  variant={childFour}
                  color={"text-red-600"}
                />
                <IntroAnimation
                  text={"patparillo@gmail.com"}
                  variant={childFive}
                  color={"text-black"}
                />
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
