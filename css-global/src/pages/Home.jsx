import React from "react";
import { Link } from "react-router-dom";
import sun from "../assets/lightMode/Sun.png";
import planet from "../assets/darkMode/planet.png";

import { ThemeContext } from "../context/ThemeContext";

import "./pages.css";

export default function Home() {
  return (
    <div>
      <h1 className="home-container">
        <div className="home-content">
          <h1 className="home-h1">Altairis</h1>
          <h3 className="home-h3">The Future in Start Buying</h3>
          <button className="home-btn">
            <Link to="/products">
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
      </h1>
    </div>
  );
}
