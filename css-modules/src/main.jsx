import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React, { Suspense } from "react";
import "./index.css";
import App from "./App.jsx";

//import Cart from "./pages/Cart.jsx";
//import Home from "./pages/Home.jsx";
//import Products from "./pages/Products.jsx";
//import About from "./pages/About.jsx";

const Cart = React.lazy(() => import("./pages/cart/Cart.jsx"));
const Home = React.lazy(() => import("./pages/home/Home.jsx"));
const Products = React.lazy(() => import("./pages/products/Products.jsx"));
const About = React.lazy(() => import("./pages/about/About.jsx"));

import { Provider } from "react-redux";
import { store } from "./stores";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import LazyloadindProducts from "./components/LazyloadindProducts.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} />

            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </Provider>
);
