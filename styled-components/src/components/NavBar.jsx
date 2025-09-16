import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import logo from "../assets/LOGOsvg.svg";

import Styled, { styled } from "styled-components";

export default function NavBar({ toggle }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <Container className="navBar-container">
      <img src={logo} alt="" />

      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          {/* <Link to="/aboutus">About us</Link> */}
          <div>
            <Link to="/cart">Cart</Link>
            <Span className="navBar-cart-span">{totalQuantity}</Span>
          </div>

          <div>
            <button onClick={toggle}>toggle</button>
          </div>
        </ul>
      </nav>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  z-index: 1000;
  background-color: transparent;
  color: var(--clr-text-primary);
  padding: 10px;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 90px;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  a {
    font-size: 1.5em;
    color: var(--clr-text-primary);
    text-decoration: none;
  }
`;

const Span = styled.span`
  color: var(--clr-text-tertiary);
  font-weight: 700;
`;
