import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

export default function NavBar({ toggle }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const carts = useSelector((store) => store.cart.items);

  useEffect(() => {
    let total = 0;
    carts.forEach((item) => (total += item.quantity));
    setTotalQuantity(total);
  }, [carts]);

  return (
    <div>
      <span>NavaBar</span>

      <nav>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/aboutus">About us</Link>
          <Link to="/cart">Cart</Link>
          <div>
            <span>cart</span>
            <span>{totalQuantity}</span>
          </div>

          <div>
            <button onClick={toggle}>Toggle</button>
          </div>
        </ul>
      </nav>
    </div>
  );
}
