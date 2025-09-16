import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

import Styled, { styled } from "styled-components";

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
    <Container className="about-container">
      {/* Left */}
      <Left>
        <img src={recivedData.imageUrl} alt={recivedData.image} />
        <p>{recivedData.elements}</p>
        <p>{recivedData.status}</p>
        <p>ratings: {recivedData.rating}</p>
        <p></p>
      </Left>

      {/* Right */}
      <div>
        <SpanAbout>More About</SpanAbout>
        <H1>{recivedData.name}</H1>
        <Info>
          <span>{recivedData.location}</span>
          <span>{recivedData.coordinate}</span>
        </Info>
        <p>"{recivedData.meaning}"</p>
        <p>{recivedData.size}</p>
        <Text>{recivedData.about}</Text>

        <div>
          <p>Request more Stars of the same type</p>
          <Button onClick={handleDecreaseQuantity}>-</Button>
          <span>{quantity}</span>
          <Button onClick={handleIncreaseQuantity}>+</Button>
          <Button onClick={handleAddCart}>Reserve Star</Button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding: 10px 200px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;

  img {
    width: 500px;
  }
`;

const SpanAbout = styled.span`
  font-size: 2.5rem;
  font-weight: 200;
`;

const H1 = styled.h1`
  font-size: 6.25rem;
  font-weight: bolder;
`;

const Info = styled.div`
  display: flex;
  font-size: 1.5rem;
  justify-content: space-between;
`;
const Span = styled.span`
  color: var(--clr-text-tertiary);
  font-weight: 700;
`;

const Text = styled.p`
  margin: 50px 0 100px;
  font-size: 1rem;
`;

const Button = styled.button`
  font-size: 1.5rem;
`;
