import React from "react";

import styles from "../card/card.module.css";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../stores/cart";

export default function Card({ data }) {
  const carts = useSelector((store) => store.cart.items);
  console.log(carts);

  //const dataCard = data;
  //console.log("DATA CARD: ", dataCard);

  const navigate = useNavigate();

  const handleAbout = () => {
    navigate("/about", { state: { data: data } });
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: data.id,
        quantity: 1,
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.tag}>
        <span>{data.status}</span>
        <div className={styles.content}>
          <h1>{data.name}</h1>
          <img className={styles.image} src={data.imageUrl} alt={data.name} />
          <p>{data.about}</p>
          <div>
            <button onClick={handleAbout}>Know more</button>
            <button onClick={handleAddToCart}>Add Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
