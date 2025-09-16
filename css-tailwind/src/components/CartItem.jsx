import React, { useEffect, useState } from "react";

import { products } from "../data/products.js";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart.js";

export default function CartItem(props) {
  const { productId, quantity } = props.data;
  const [detail, setDetail] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];

    setDetail(findDetail);
  }, [productId]);
  console.log(detail);

  const handleReduceQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };
  const handleIncreaseQuantity = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };

  return (
    <div className="flex items-center gap-10 p-5 border-b border-black">
      Cart Item
      <img className="w-10" src={detail.imageUrl} alt={detail.image} />
      <p>{detail.name}</p>
      <p>Star Quantity {quantity}</p>
      <p>Price Only by consult!</p>
      {/* <p>Price Only by consult {detail.price * quantity}</p> */}
      <div className="border-l border-black pl-5 flex items-center gap-5">
        <button onClick={handleReduceQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <p>Your request will be recived by our team after confirmation.</p>
    </div>
  );
}
