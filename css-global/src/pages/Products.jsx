import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import LazyloadindProducts from "../components/LazyloadindProducts";

//import data from "../../src/data/Data.json";

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
      <div className="products-container">
        <LazyloadindProducts products={dataLenght} />
      </div>
    );

  if (error)
    return (
      <div className="products-container">
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div className="products-container">
      <h1>Our products</h1>

      <div className="products-grid">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
