import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

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
      <div className="about-left">
        <img
          className="about-img"
          src={recivedData.imageUrl}
          alt={recivedData.image}
        />
        <p>{recivedData.elements}</p>
        <p>{recivedData.status}</p>
        <p>ratings: {recivedData.rating}</p>
        <p></p>
      </div>

      {/* Right */}
      <div>
        <span className="about-span">More About</span>
        <h1 className="about-h1">{recivedData.name}</h1>
        <div className="about-info">
          <span>{recivedData.location}</span>
          <span>{recivedData.coordinate}</span>
        </div>
        <p>"{recivedData.meaning}"</p>
        <p>{recivedData.size}</p>
        <p className="about-ptext">{recivedData.about}</p>

        <div>
          <p>Request more Stars of the same type</p>
          <button className="about-btns" onClick={handleDecreaseQuantity}>
            -
          </button>
          <span>{quantity}</span>
          <button className="about-btns" onClick={handleIncreaseQuantity}>
            +
          </button>
          <button className="about-btns" onClick={handleAddCart}>
            Reserve Star
          </button>
        </div>
      </div>
    </div>
  );
}
