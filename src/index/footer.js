import React from "react";

export default function Footer() {
  return (
    <div className="bottom-0 flex-grow border-t-2 border-r-2 border-black flex flex-col self-end justify-center ">
      <div className="flex w-full mx-auto justify-around items-center h-full overflow-hidden relative">
        <div className="w-1/2 border-r-2 border-black pt-8 pb-6  flex justify-center items-center">
          <p className="font-mono text-xs uppercase">© 2019 September</p>
        </div>
        <div className="w-1/2 pt-8 pb-6 flex justify-center items-center">
          <p className="font-mono text-xs uppercase">Resume</p>
        </div>
      </div>
    </div>
  );
}
