import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

import "../pages/pages.css";

export default function About() {
  const location = useLocation();
  const recivedData = location.state?.data;
  //console.log(recivedData);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleAddCart = () => {
    dispatch(
      addToCart({
        productId: recivedData.id,
        quantity: quantity,
      })
    );
  };

  return (
    <div className="about-container">
      {/* Left */}
      <div>
        <img src={recivedData.image} alt={recivedData.image} />
      </div>

      {/* Right */}
      <div>
        <span>More About</span>
        <h1>{recivedData.name}</h1>
        <p>{recivedData.about}</p>

        {/* <button>Add Cart</button> */}
        <div>
          <button onClick={handleDecreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncreaseQuantity}>+</button>
          <button onClick={handleAddCart}>Add Cart</button>
        </div>
      </div>
    </div>
  );
}
