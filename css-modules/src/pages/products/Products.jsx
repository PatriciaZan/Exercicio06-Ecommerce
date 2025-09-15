import React, { useEffect, useState } from "react";

import Card from "../../components/card/Card";
import LazyloadindProducts from "../../components/LazyloadindProducts";

//import data from "../../src/data/Data.json";

import styles from "../products/products.module.css";

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
      <div className={styles.container}>
        <LazyloadindProducts products={dataLenght} />
      </div>
    );

  if (error)
    return (
      <div className={styles.container}>
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div className={styles.container}>
      <div className="products-header">
        <h1>Our Stars and Suns </h1>
        <p>
          The best available sales right now. Make a reservation or contact our
          selesman team for a personalized visit.
        </p>
      </div>

      <div className={styles.grid}>
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
