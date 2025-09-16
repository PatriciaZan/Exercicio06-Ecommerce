import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import LazyloadindProducts from "../components/LazyloadindProducts";

//import data from "../../src/data/Data.json";
import Styled, { styled } from "styled-components";

export default function Products() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let dataLenght = 0;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../../src/data/Data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        const data = result.products;
        setData(data);

        dataLenght = data.length;

        console.log("RESULT: ", data);
        console.log("LENGHT: ", dataLenght);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  if (loading)
    return (
      <Container>
        <LazyloadindProducts products={dataLenght} />
      </Container>
    );

  if (error)
    return (
      <Container>
        <p>Error: {error.message}</p>
      </Container>
    );

  return (
    <Container>
      <Header>
        <h1>Our Stars and Suns </h1>
        <p>
          The best available sales right now. Make a reservation or contact our
          selesman team for a personalized visit.
        </p>
      </Header>

      <Grid>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </Grid>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 100vw;
`;

const Header = styled.div`
  margin: 20px 0 30px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 100px;

  @media (min-width: 320px) and (max-width: 480px) {
    background-color: green;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 20px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    background-color: blue;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    background-color: red;

    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;
