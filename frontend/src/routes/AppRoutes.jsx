import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Product/Product";
import Checkout from "../pages/Checkout/Checkout";
import Profile from "../pages/Profile/Profile";

function AppRoutes() {
  return (
    <Routes>

      <Route element={<MainLayout />}>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/profile" element={<Profile />} />

      </Route>

    </Routes>
  );
}

export default AppRoutes;