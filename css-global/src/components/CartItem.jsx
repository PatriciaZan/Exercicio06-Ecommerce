import React, { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { products } from "../data/products.js";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart.js";

export default function CartItem(props) {
  //const [dataCart, setDataCart] = useState([]);
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

  //const carts = useSelector((store) => store.cart.items);
  //console.log(carts);

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
    <div className="cartItem-container">
      Cart Item
      <img className="cart-img" src={detail.imageUrl} alt={detail.image} />
      <p>{detail.name}</p>
      <p>Star Quantity {quantity}</p>
      <p>Aproximated Price {detail.price * quantity}</p>
      <div className="cartItem-btns">
        <button onClick={handleReduceQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <p>Your request will be recived by our team after confirmation.</p>
    </div>
  );
}
