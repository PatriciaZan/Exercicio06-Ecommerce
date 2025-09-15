import React from "react";
import CartItem from "../../components/cartItem/CartItem";
import { useSelector } from "react-redux";

import styles from "../cart/cart.module.css";

export default function Cart() {
  const carts = useSelector((store) => store.cart.items);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className={styles.items}>
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
    </div>
  );
}
