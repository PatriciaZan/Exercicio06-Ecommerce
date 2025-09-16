import React from "react";

import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

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
    <div className="flex flex-col justify-around bg-gradient-to-b from-[#217aff] to-white p-[10px] rounded-[10px]">
      <div className="rounded-[10px]">
        <span className="text-3xl font-bold text-white">{data.status}</span>
        <div className="w-[350px] h-[350px] min-h-[280px] min-w-[260px] flex flex-col items-center text-center justify-between gap-[15px] p-5 rounded-[10px] bg-gray-400">
          <h1 className="text-4xl font-bold">{data.name}</h1>
          <img className="w-[100px]" src={data.imageUrl} alt={data.name} />
          <p>{data.about}</p>
          <div>
            <button
              className="bg-blue-600 font-bold text-white border-none py-2.5 px-4 rounded-[5px] cursor-pointer hover:bg-blue-700"
              onClick={handleAbout}
            >
              Know more
            </button>
            <button
              className="ml-[10px] bg-blue-600 font-bold text-white border-none py-2.5 px-4 rounded-[5px] cursor-pointer hover:bg-blue-700"
              onClick={handleAddToCart}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
