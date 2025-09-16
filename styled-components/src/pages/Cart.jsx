import React from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

import Styled, { styled } from "styled-components";

export default function Cart() {
  const carts = useSelector((store) => store.cart.items);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <Items>
        {carts.map((item, key) => (
          <CartItem key={key} data={item} />
        ))}
      </Items>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background: #217aff;
  background: linear-gradient(
    180deg,
    rgba(33, 122, 255, 1) 0%,
    rgba(255, 255, 255, 1) 100%
  );
  padding: 10px;
  border-radius: 10px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
