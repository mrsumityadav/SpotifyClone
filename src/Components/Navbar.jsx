import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={()=>navigate(-1)}
            src={assets.arrow_left}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
          />
          <img
            onClick={()=>navigate(1)}
            src={assets.arrow_right}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black px-4 py-1 text-[15px] rounded-full hidden md:block cursor-default">
            Explore Premium
          </p>
          <p className="bg-black px-4 py-1 text-[15px] rounded-full cursor-default">
            Install App
          </p>
          <p className="bg-slate-500 w-7 h-7  text-[15px] rounded-full flex items-center justify-center cursor-default">
            S
          </p>
        </div>
      </div>
      <div className="flex items-center gap-3 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-default">All</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-default">Music</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-default">Podcast</p>
      </div>
    </div>
  );
}

export default Navbar;
