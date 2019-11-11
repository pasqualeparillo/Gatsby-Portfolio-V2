import React from "react";

export default function Footer() {
  return (
    <div className="bottom-0 flex-grow border-t border-black flex flex-col self-end justify-center ">
      <div className="flex w-full mx-auto justify-around items-center h-full overflow-hidden relative">
        <div className="w-1/2 border-r border-black pt-8 pb-6  flex justify-center items-center">
          <p className="  text-xs uppercase">© 2019 September</p>
        </div>
        <div className="w-1/2 pt-8 pb-6 flex justify-center items-center cursor-pointer bg-black">
          <p className="  text-xs uppercase hover:font-bold text-white">
            Resume
          </p>
        </div>
      </div>
    </div>
  );
}
