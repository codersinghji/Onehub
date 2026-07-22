import "./FeaturedProducts.css";
import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

import laptop from "../../assets/featured/laptop.png";
import mobile from "../../assets/featured/mobile.png";
import watch from "../../assets/featured/watch.png";
import headphone from "../../assets/featured/headphones.png";
import shoes from "../../assets/featured/shoes.png";
import camera from "../../assets/featured/camera.png";
import keyboard from "../../assets/featured/keyboard.png";
import backpack from "../../assets/featured/backpack.png";

const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    image: laptop,
    price: "₹69,999",
    rating: 4.9,
  },
  {
    id: 2,
    name: "5G Smartphone",
    image: mobile,
    price: "₹22,999",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Smart Watch",
    image: watch,
    price: "₹3,499",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Wireless Headphones",
    image: headphone,
    price: "₹2,999",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Running Shoes",
    image: shoes,
    price: "₹2,499",
    rating: 4.6,
  },
  {
    id: 6,
    name: "DSLR Camera",
    image: camera,
    price: "₹48,999",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Gaming Keyboard",
    image: keyboard,
    price: "₹2,199",
    rating: 4.7,
  },
  {
    id: 8,
    name: "Travel Backpack",
    image: backpack,
    price: "₹1,799",
    rating: 4.5,
  },
];

function FeaturedProducts() {
  return (
    <section className="featured-products">

      <div className="container">

        <div className="featured-header">
          <h2>Featured Products</h2>

          {/* <Link to="/featured-products" className="view-all">
          View All
         </Link> */}
         {/* <Link to="/flash-sale" className="view-all">
          View All
          </Link> */}

          <Link to="/featured-products"
          className="view-all"
          >View All</Link>


        </div>

        <div className="featured-grid">

          {products.map((item) => (
            <div className="featured-card" key={item.id}>

              <button className="fav-btn">
                <FaHeart />
              </button>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <div className="featured-rating">
                <FaStar />
                <span>{item.rating}</span>
              </div>

              <h4>{item.price}</h4>

              <button
                className="featured-cart"
                onClick={() => alert(item.name + " Added to Cart")}
              >
                <FaShoppingCart />
                Add to Cart
              </button>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedProducts;