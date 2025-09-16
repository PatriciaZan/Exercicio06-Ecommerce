import React from "react";
import { Link } from "react-router-dom";
import sun from "../assets/lightMode/Sun.png";
import planet from "../assets/darkMode/planet.png";

import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  return (
    <div>
      <div>
        <h1>Altairis</h1>
        <h3>The Future in Start Buying</h3>
        <button>
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
