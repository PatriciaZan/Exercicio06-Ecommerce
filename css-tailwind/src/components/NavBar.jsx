import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import logo from "../assets/LOGOsvg.svg";

export default function NavBar({ toggle }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <div className="relative z-[1000] bg-transparent p-[10px] font-extralight flex items-center justify-between">
      <img className="w-[90px]" src={logo} alt="" />

      <nav>
        <ul className="flex items-center gap-[30px]">
          <Link
            className="text-[1.5em] text-[var(--clr-text-primary)] no-underline"
            to="/"
          >
            Home
          </Link>
          <Link
            className="text-[1.5em] text-[var(--clr-text-primary)] no-underline"
            to="/products"
          >
            Products
          </Link>
          {/* <Link to="/aboutus">About us</Link> */}
          <div>
            <Link
              className="text-[1.5em] text-[var(--clr-text-primary)] no-underline"
              to="/cart"
            >
              Cart
            </Link>
            <span className="text-[var(--clr-text-tertiary)] font-bold">
              {totalQuantity}
            </span>
          </div>

          <div>
            <button
              className="text-2xl bg-gray-400 text-white border-none py-2.5 px-4 rounded-[5px] cursor-pointer hover:bg-gray-700"
              onClick={toggle}
            >
              toggle
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}
