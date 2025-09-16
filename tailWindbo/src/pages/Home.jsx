import React from "react";
import { Link } from "react-router-dom";
import sun from "../assets/lightMode/Sun.png";
import planet from "../assets/darkMode/planet.png";

import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  return (
    <div>
      <div class="w-screen flex flex-col items-center relative z-[1]">
        <h1 class="mt-[100px] mb-[10px] font-extralight tracking-[40%] text-9xl">
          Altairis
        </h1>
        <h3 class="font-extralight mb-[90px]">The Future in Start Buying</h3>
        <button class="bg-black font-normal py-[20px] px-[60px] text-[2rem]">
          <Link class="text-white no-underline" to="/products">
            Buy <strong>Your</strong> Next Star
          </Link>
        </button>
      </div>
      <div className="home-image-wrapper">
        <picture>
          <source srcSet="" media="(prefers-color-scheme: dark)" />
          <img className="home-img" src={sun} alt="" />
        </picture>
      </div>
    </div>
  );
}
