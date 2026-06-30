import "./Hero.css";
import { Link } from "react-router-dom";
import heroLogo from "../../assets/hero/onehub-logo.png";
import electronics from "../../assets/categories/electronics.png";
import fashion from "../../assets/categories/fashion.png";
import beauty from "../../assets/categories/beauty.png";
import furniture from "../../assets/categories/furniture.png";
import grocery from "../../assets/categories/grocery.png";
import sport from "../../assets/categories/sport.png";
import mobile from "../../assets/categories/mobile.png";


function Hero() {
  return (
    <section className="hero">

      {/* Left Side */}
      <div className="hero-left">

        <span className="hero-badge">
          India's Smart Shopping Platform
        </span>

        <h1>
          Everything You Need
          <br />
          <span>In OneHub</span>
        </h1>

        <p>
          Shop Electronics, Fashion, Grocery, Pharmacy,
          Furniture, Beauty Products and much more.
          Fast Delivery • Secure Payment • Best Prices.
        </p>

        <div className="hero-buttons">
          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>

          <Link to="/register" className="explore-btn">
            Join Free
          </Link>
        </div>

        <div className="hero-stats">
          <div>
            <h3>1M+</h3>
            <p>Customers</p>
          </div>

          <div>
            <h3>50K+</h3>
            <p>Products</p>
          </div>

          <div>
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>

      </div>

      {/* Right Side */}
<div className="hero-right">

  {/* OneHub Logo */}
  {/* <img
    src={heroLogo}
    alt="OneHub Logo"
    className="hero-logo"
  /> */}

  {/* Main Image */}
  <img
    src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=800"
    alt="Shopping"
    className="hero-main-image"
  />

  {/* Categories */}
  <div className="hero-categories">

    <div className="category-card">
      <img src={electronics} alt="Electronics" />
      <span>Electronics</span>
    </div>

    <div className="category-card">
      <img src={fashion} alt="Fashion" />
      <span>Fashion</span>
    </div>

    <div className="category-card">
      <img src={beauty} alt="beauty" />
      <span>beauty</span>
    </div>

    <div className="category-card">
      <img src={furniture} alt="Furniture" />
      <span>Furniture</span>
    </div>

    <div className="category-card">
      <img src={grocery} alt="grocery" />
      <span>grocery</span>
    </div>

    <div className="category-card">
      <img src={sport} alt="Sports" />
      <span>Sports</span>
    </div>

  </div>

</div>
    </section>
  );
}

export default Hero;