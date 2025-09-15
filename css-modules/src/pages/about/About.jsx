import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart";

import styles from "../about/about.module.css";

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
    <div className={styles.container}>
      {/* Left */}
      <div className={styles.left}>
        <img
          className={styles.img}
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
        <span className={styles.span}>More About</span>
        <h1 className={styles.h1}>{recivedData.name}</h1>
        <div className={styles.info}>
          <span>{recivedData.location}</span>
          <span>{recivedData.coordinate}</span>
        </div>
        <p>"{recivedData.meaning}"</p>
        <p>{recivedData.size}</p>
        <p className={styles.ptext}>{recivedData.about}</p>

        <div>
          <p>Request more Stars of the same type</p>
          <button className={styles.btns} onClick={handleDecreaseQuantity}>
            -
          </button>
          <span>{quantity}</span>
          <button className={styles.btns} onClick={handleIncreaseQuantity}>
            +
          </button>
          <button className={styles.btns} onClick={handleAddCart}>
            Reserve Star
          </button>
        </div>
      </div>
    </div>
  );
}
