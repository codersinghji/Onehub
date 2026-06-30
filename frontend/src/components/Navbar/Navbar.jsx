import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
  FaSearch,
  FaShoppingCart,
  FaUserCircle,
  FaStore,
  FaChevronDown,
} from "react-icons/fa";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <header className="navbar">

      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <h1>OneHub</h1>
        </Link>
      </div>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search products, groceries, medicines..."
        />

        <button>
          <FaSearch />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className={`nav-links ${menuOpen ? "active" : ""}`}>

        <Link to="/">Home</Link>

        {/* Categories */}
        <div
          className="dropdown"
          onMouseEnter={() => setCategoryOpen(true)}
          onMouseLeave={() => setCategoryOpen(false)}
        >
          <button className="drop-btn">
            Categories
            <FaChevronDown className="arrow" />
          </button>

          {categoryOpen && (
            <div className="dropdown-menu">

              <Link to="/electronics">Electronics</Link>

              <Link to="/fashion">Fashion</Link>

              <Link to="/mobiles">Mobiles</Link>

              <Link to="/grocery">Grocery</Link>

              <Link to="/pharmacy">Pharmacy</Link>

              <Link to="/beauty">Beauty</Link>

              <Link to="/sports">Sports</Link>

              <Link to="/furniture">Furniture</Link>

            </div>
          )}
        </div>

        {/* Seller */}
        <Link to="/seller" className="seller-link">
          <FaStore />
          <span>Become Seller</span>
        </Link>

        {/* Login */}
        <Link to="/login">
          Login
        </Link>

        {/* Cart */}
        <Link to="/cart" className="cart">

          <FaShoppingCart className="cart-icon" />

          <span className="cart-badge">
            2
          </span>

        </Link>

        {/* Profile */}
        <Link to="/profile" className="profile">
          <FaUserCircle />
        </Link>

      </nav>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

    </header>
  );
}

export default Navbar;