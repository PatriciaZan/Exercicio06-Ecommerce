import React, { useEffect, useState } from "react";
//import { useSelector } from "react-redux";
import { products } from "../data/products.js";

export default function CartItem(props) {
  //const [dataCart, setDataCart] = useState([]);
  const { productId, quantity } = useState([]);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const findDetail = products.filter(
      (product) => product.id === productId
    )[0];

    setDetail(findDetail);
  }, [productId]);
  console.log(detail);

  //const carts = useSelector((store) => store.cart.items);
  //console.log(carts);

  return (
    <div>
      Cart Item
      <p></p>
    </div>
  );
}
