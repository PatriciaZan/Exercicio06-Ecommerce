import React from "react";
import { Link } from "react-router-dom";
import sun from "../assets/lightMode/Sun.png";

import { ThemeContext } from "../context/ThemeContext";

import Styled, { styled } from "styled-components";
//import theme from "../theme.js";

export default function Home() {
  return (
    <div>
      <div>
        <HomeContent>
          <H1>Altairis</H1>
          <H3 className="home-h3">The Future in Start Buying</H3>
          <Btn className="home-btn">
            <Link to="/products">
              Buy <strong>Your</strong> Next Star
            </Link>
          </Btn>
        </HomeContent>
      </div>
      <ImageWrapper>
        <img className="home-img" src={sun} alt="" />
      </ImageWrapper>
    </div>
  );
}

const HomeContent = styled.div`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const H1 = styled.h1`
  margin: 100px 0 10px 0;
  font-weight: 200;
  letter-spacing: 40%;
  font-size: 8rem;
`;

const H3 = styled.h3`
  font-weight: 200;
  margin-bottom: 90px;
`;

const Btn = styled.button`
  background-color: var(--clr-secondary);
  font-weight: 400;
  padding: 20px 60px;
  font-size: 2rem;

  a {
    color: var(--clr-text-white);
    text-decoration: none;
  }
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center -400px;
    filter: blur(2px);
  }
`;
