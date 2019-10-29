import React from "react";
import Aside from "./aside";

export default function Intro() {
  return (
    <div className="flex flex flex-wrap flex-grow relative border-black border-r-2 border-l-2">
      <div
        className="flex flex-col lg:w-3/5 w-full relative p-4 border-r-2 border-black"
        style={{ height: "70%" }}
      >
        <div
          className="flex items-center justify-start relative"
          style={{ height: "33%" }}
        >
          <p
            className="font-black text-black tracking-tighter uppercase leading-none -mt-1"
            style={{ fontSize: "10vw", lineHeight: 0.85 }}
          >
            Developer
          </p>
        </div>
        <div
          className="flex items-center justify-end relative"
          style={{ height: "33%" }}
        >
          <p
            className="font-black text-black tracking-tighter uppercase leading-none -mt-1"
            style={{ fontSize: "10vw", lineHeight: 0.85 }}
          >
            From
          </p>
        </div>
        <div
          className="flex items-center justify-start relative"
          style={{ height: "33%" }}
        >
          <p
            className="font-black text-black tracking-tighter uppercase leading-none -mt-1"
            style={{ fontSize: "10vw", lineHeight: 0.85 }}
          >
            Seattle
          </p>
        </div>
      </div>
      <Aside />
    </div>
  );
}
