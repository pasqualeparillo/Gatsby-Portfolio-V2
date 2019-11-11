import React, { useContext } from "react";
import { SizeContext } from "../store/size";
export default function Aside() {
  const { size } = useContext(SizeContext);
  return (
    <div className="flex lg:flex-grow relative lg:w-auto w-full lg:h-full h-64 font-roboto">
      <div
        className="lg:absolute relative w-full flex flex-col justify-end items-end text-black"
        style={{ height: `calc(100vh - ${size.y}px - 5rem)` }}
      >
        <div className="w-full flex flex-col p-4">
          <p className="text-3vw uppercase break-words tracking-tighter font-black">
            Hello,
          </p>
          <p className="text-3vw uppercase break-words tracking-tighter font-black">
            My name is Pasquale Parillo
          </p>
          <p className="text-3vw uppercase break-words tracking-tighter mt-4 font-black">
            I am a web developer currently living in Seattle, WA.{" "}
          </p>
          <p className="text-3vw uppercase break-words leading-normal tracking-tighter mt-4 font-black">
            Before becomming a professional developer I had a previous career in
            IT. This atypical background allows me to think with a user first
            approach to accessability & design.
          </p>
        </div>
      </div>
    </div>
  );
}
