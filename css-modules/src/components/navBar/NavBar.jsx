import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import logo from "../../assets/LOGOsvg.svg";

import styles from "../navBar/navBar.module.css";

export default function NavBar({ toggle }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <div className={styles.navBar}>
      <img className={styles.logo} src={logo} alt="" />

      <nav>
        <ul className={styles.ul}>
          <Link className={styles.a} to="/">
            Home
          </Link>
          <Link className={styles.a} to="/products">
            Products
          </Link>
          {/* <Link to="/aboutus">About us</Link> */}
          <div>
            <Link className={styles.a} to="/cart">
              Cart
            </Link>
            <span className={styles.span}>{totalQuantity}</span>
          </div>

          <div>
            <button onClick={toggle}>toggle</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}
