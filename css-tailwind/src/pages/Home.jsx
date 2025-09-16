import React from "react";
import { Link } from "react-router-dom";
import sun from "../assets/lightMode/Sun.png";
import planet from "../assets/darkMode/planet.png";

import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  return (
    <div>
      <div className="w-screen flex flex-col items-center relative z-[1]">
        <h1 className="mt-[100px] mb-[10px] font-extralight tracking-[40%] text-9xl">
          Altairis
        </h1>
        <h3 className="font-extralight mb-[90px] text-3xl">
          The Future in Start Buying
        </h3>
        <button className="bg-black font-normal py-[20px] px-[60px] text-[2rem] border-none py-2.5 px-4 rounded-[5px] cursor-pointer hover:bg-gray-700">
          <Link className="text-white no-underline" to="/products">
            Buy <strong>Your</strong> Next Star
          </Link>
        </button>
      </div>
      <div className="absolute left-0 right-0 top-0 z-0 w-full h-full overflow-hidden">
        <picture>
          <img
            className="w-full h-full object-cover object-[center_-400px] blur-[2px]"
            src={sun}
            alt=""
          />
        </picture>
      </div>
    </div>
  );
}
