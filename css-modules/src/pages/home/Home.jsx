import React from "react";
import { Link } from "react-router-dom";
import sun from "../../assets/lightMode/Sun.png";

import { ThemeContext } from "../../context/ThemeContext";

import styles from "../home/home.module.css";

export default function Home() {
  return (
    <div>
      <h1 className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.h1}>Altairis</h1>
          <h3 className={styles.h3}>The Future in Start Buying</h3>
          <button className={styles.btn}>
            <Link to="/products">
              Buy <strong>Your</strong> Next Star
            </Link>
          </button>
        </div>
        <div className={styles.wrapper}>
          <picture>
            <source srcSet="" media="(prefers-color-scheme: dark)" />
            <img className={styles.image} src={sun} alt="" />
          </picture>
        </div>
      </h1>
    </div>
  );
}
