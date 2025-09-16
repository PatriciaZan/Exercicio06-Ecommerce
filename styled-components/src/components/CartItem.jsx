import React, { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { products } from "../data/products.js";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../stores/cart.js";

import Styled, { styled } from "styled-components";

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
    <Container>
      Cart Item
      <img src={detail.imageUrl} alt={detail.image} />
      <p>{detail.name}</p>
      <p>Star Quantity {quantity}</p>
      <p>Aproximated Price {detail.price * quantity}</p>
      <div>
        <button onClick={handleReduceQuantity}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <p>Your request will be recived by our team after confirmation.</p>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 20px;
  border-bottom: 1px solid black;

  img {
    width: 40px;
  }

  div {
    border-left: 1px solid black;
    padding-left: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;
