import React from "react";
import Aside from "../reuseable/aside";
import { motion } from "framer-motion";
import IntroAnimation from "../reuseable/introAnimation";
import MediaQuery from "react-responsive";

const parent = {
  exit: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  },
  enter: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.2,
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
      type: "spring",
      mass: 0.5,
      damping: 200
    }
  },
  enter: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 200
    }
  },
  initial: {
    y: 300
  }
};
const childTwo = {
  exit: {
    y: 300,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 200,
      delay: 0.1
    }
  },
  enter: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 200,
      delay: 0.1
    }
  }
};
const childThree = {
  exit: {
    y: 300,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 200,
      delay: 0.2
    }
  },
  enter: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 200,
      delay: 0.2
    }
  }
};
const childFour = {
  exit: {
    y: 300,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 200,
      delay: 0.3
    }
  },
  enter: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 200,
      delay: 0.3
    }
  }
};
const childFive = {
  exit: {
    y: 300,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 200,
      delay: 0.4
    }
  },
  enter: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 200,
      delay: 0.4
    }
  }
};
export default function Intro() {
  return (
    <div className="flex flex-wrap flex-grow relative lg:flex-row">
      <div className="lg:w-3/5 w-full lg:h-full h-64 lg:border-b-0 border-b border-black p-1">
        <motion.div
          variants={parent}
          className="w-full h-full flex flex-wrap relative"
        >
          <div className="flex flex-col justify-center w-full items-start relative overflow-hidden font-bebas">
            <motion.p
              className="font-black tracking-widest uppercase absolute z-20 text-blue-800 lg:text-9vw md:text-13vw text-18vw left-0"
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
          <div className="flex flex-col justify-center w-full items-end relative overflow-hidden font-bebas">
            <motion.p
              className="font-black tracking-widest uppercase absolute text-blue-800 lg:text-9vw md:text-13vw text-18vw"
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
          <div className="flex flex-col justify-center w-full items-start relative overflow-hidden font-bebas">
            <motion.p
              className="font-black tracking-widest uppercase absolute text-blue-800 lg:text-9vw md:text-13vw text-18vw "
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
      <Aside>
        <MediaQuery minWidth={992}>
          <motion.div
            className="lg:absolute relative w-full flex flex-col justify-end items-end text-black"
            variants={child}
            initial={{ y: 300 }}
            style={{ height: `calc(100vh - 11rem)` }}
          >
            <div className="w-full flex flex-col p-4">
              <p className="text-3vw uppercase break-words tracking-normal  font-fira">
                Hello,
              </p>
              <p className="text-3vw uppercase break-words tracking-normal mt-4  font-fira">
                My name is Pasquale Parillo
              </p>
              <p className="text-3vw uppercase break-words tracking-normal mt-4  font-fira">
                I am a web developer currently living in Seattle, WA.{" "}
              </p>
              <p className="text-3vw uppercase break-words leading-normal tracking-normal mt-4  font-fira">
                Before becomming a professional developer I had a previous
                career in IT. This atypical background allows me to think with a
                user first approach to accessability & design.
              </p>
            </div>
          </motion.div>
        </MediaQuery>
        <MediaQuery maxWidth={992}>
          <motion.div
            className="relative w-full flex flex-col justify-start items-start text-black"
            variants={child}
            initial={{ y: 300 }}
          >
            <div className="flex flex-col p-4">
              <p className="text-sm uppercase break-words tracking-normal  font-fira">
                Hello,
              </p>
              <p className="text-sm uppercase break-words tracking-normal mt-2  font-fira">
                My name is Pasquale Parillo
              </p>
              <p className="text-sm uppercase break-words tracking-normal mt-2  font-fira">
                I am a web developer currently living in Seattle, WA.{" "}
              </p>
              <p className="text-sm uppercase break-words leading-normal tracking-normal mt-2  font-fira">
                Before becomming a professional developer I had a previous
                career in IT. This atypical background allows me to think with a
                user first approach to accessability & design.
              </p>
            </div>
          </motion.div>
        </MediaQuery>
      </Aside>
    </div>
  );
}
