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
      <div className="flex flex-col items-center text-center w-screen h-full">
        <LazyloadindProducts products={dataLenght} />
      </div>
    );

  if (error)
    return (
      <div className="flex flex-col items-center text-center w-screen">
        <p>Error: {error.message}</p>
      </div>
    );

  return (
    <div className="flex flex-col items-center text-center h-full">
      <div className="mt-5 mb-[30px]">
        <h1 className="text-4xl">Our Stars and Suns </h1>
        <p>
          The best available sales right now. Make a reservation or contact our
          selesman team for a personalized visit.
        </p>
      </div>

      <div
        className=" gap-x-12 gap-y-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
      
      "
      >
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
