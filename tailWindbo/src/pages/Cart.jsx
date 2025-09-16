import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart() {
  const carts = useSelector((store) => store.cart.items);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <div className="cart-items">
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </div>
    </div>
  );
}
