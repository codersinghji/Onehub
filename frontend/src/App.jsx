import { Routes, Route } from "react-router-dom";
//import { BrowserRou, Routes, Route } from "react-router-dom";


import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

import FlashSaleProducts from "./pages/FlashSaleProducts/FlashSaleProducts";
import TodaysDealsProducts from "./pages/TodaysDealsProducts/TodaysDealsProducts";
import FeaturedProductsPage from "./pages/FeaturedProductsPage/FeaturedProductsPage";
import PharmacyProducts from "./pages/PharmacyProducts/PharmacyProducts";
import GroceryProducts from "./pages/GroceryProducts/GroceryProducts";
import PopularBrandsPage from "./pages/PopularBrandsPage/PopularBrandsPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/Profile/Profile";



function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/products" element={<Products />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/flash-sale" element={<FlashSaleProducts />} />
       <Route path="/todays-deals" element={<TodaysDealsProducts />} />
       <Route path="/featured-products" element={<FeaturedProductsPage />} />
       <Route path="/grocery-products" element={<GroceryProducts />} />
        <Route path="/pharmacy-products" element={<PharmacyProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/popular-brands"
          element={<PopularBrandsPage />}
        />
        <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}


export default App;