import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { useDispatch } from "react-redux";
import { addToCart } from "../stores/cart";

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
    <div className="flex justify-center gap-12 py-2.5 px-52">
      {/* Left */}
      <div className="flex flex-col items-center text-center gap-10">
        <img
          className="w-[500px]"
          src={recivedData.imageUrl}
          alt={recivedData.image}
        />
        <p>{recivedData.elements}</p>
        <p>{recivedData.status}</p>
        <p>ratings: {recivedData.rating}</p>
        <p></p>
      </div>

      {/* Right */}
      <div>
        <span className="text-[2.5rem] font-extralight">More About</span>
        <h1 className="text-[6.25rem] font-extrabold">{recivedData.name}</h1>
        <div className="flex text-2xl justify-between">
          <span>{recivedData.location}</span>
          <span>{recivedData.coordinate}</span>
        </div>
        <p>"{recivedData.meaning}"</p>
        <p>{recivedData.size}</p>
        <p className="mt-12 mb-24 text-base">{recivedData.about}</p>

        <div>
          <p>Request more Stars of the same type</p>
          <button
            className="mr-[10px] text-2xl bg-blue-600 font-bold text-white border-none py-2.5 px-4 rounded-[5px] cursor-pointer hover:bg-blue-700"
            onClick={handleDecreaseQuantity}
          >
            -
          </button>
          <span className="text-2xl">{quantity}</span>
          <button
            className="ml-[10px] text-2xl bg-blue-600 font-bold text-white border-none py-2.5 px-4 rounded-[5px] cursor-pointer hover:bg-blue-700"
            onClick={handleIncreaseQuantity}
          >
            +
          </button>
          <button
            className="ml-[10px] text-2xl bg-blue-600 font-bold text-white border-none py-2.5 px-4 rounded-[5px] cursor-pointer hover:bg-blue-700"
            onClick={handleAddCart}
          >
            Reserve Star
          </button>
        </div>
      </div>
    </div>
  );
}
