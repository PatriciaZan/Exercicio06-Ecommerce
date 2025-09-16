import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

import Styled, { styled } from "styled-components";

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
    <Container>
      <Tags>
        <span>{data.status}</span>
        <Content>
          <h1>{data.name}</h1>
          <img className="card-image" src={data.imageUrl} alt={data.name} />
          <p>{data.about}</p>
          <div>
            <button onClick={handleAbout}>Know more</button>
            <button onClick={handleAddToCart}>Add Cart</button>
          </div>
        </Content>
      </Tags>
    </Container>
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

  span {
    font-size: 2rem;
    font-weight: 700;
    color: var(--clr-text-white);
  }
`;

const Tags = styled.div`
  border-radius: 10px;
`;

const Content = styled.div`
  width: 350px;
  height: 350px;

  min-height: 280px;
  min-width: 260px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  gap: 15px;

  padding: 20px;
  border-radius: 10px;
  background-color: var(--clr-background);

  img {
    width: 100px;
  }
`;
