import "./FlashSale.css";
import { Link } from "react-router-dom";

import { FaStar, FaHeart, FaShoppingCart } from "react-icons/fa";

import laptop from "../../assets/flashsale/laptop.png";
import mobile from "../../assets/flashsale/mobile.png";
import headphones from "../../assets/flashsale/headphone.png";
import shoes from "../../assets/flashsale/shoes.png";
import watch from "../../assets/flashsale/watch.png";
import speaker from "../../assets/flashsale/speaker.png";
import saree from "../../assets/flashsale/saree.png";
import kurti from "../../assets/flashsale/kurti.png";




const products = [
  {
    id: 1,
    name: "Gaming Laptop",
    image: laptop,
    price: "₹59,999",
    oldPrice: "₹74,999",
    discount: "20% OFF",
    rating: 4.8,
  },
  {
    id: 2,
    name: "5G Smartphone",
    image: mobile,
    price: "₹18,999",
    oldPrice: "₹24,999",
    discount: "24% OFF",
    rating: 4.6,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    image: headphones,
    price: "₹2,499",
    oldPrice: "₹3,999",
    discount: "38% OFF",
    rating: 4.7,
  },
  {
    id: 4,
    name: "Running Shoes",
    image: shoes,
    price: "₹1,999",
    oldPrice: "₹3,299",
    discount: "40% OFF",
    rating: 4.5,
  },
  {
    id: 5,
    name: "Smart Watch",
    image: watch,
    price: "₹2,999",
    oldPrice: "₹4,999",
    discount: "40% OFF",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    image: speaker,
    price: "₹1,499",
    oldPrice: "₹2,499",
    discount: "40% OFF",
    rating: 4.7,
  },
  {
    id: 7,
    name: "Saree",
    image: saree,
    price: "₹2,499",
    oldPrice: "₹3,499",
    discount: "40% OFF",
    rating: 4.6,
  },
  {
    id: 8,
    name: "Kurti",
    image: kurti,
    price: "₹2,499",
    oldPrice: "₹3,499",
    discount: "40% OFF",
    rating: 4.7,
  },{
    id: 9,
    name: "Bluetooth Speaker",
    image: speaker,
    price: "₹1,499",
    oldPrice: "₹2,499",
    discount: "40% OFF",
    rating: 4.7,
  },
  
  
];

function FlashSale() {
  return (
    <section className="flash-sale">

      <div className="container">

        <div className="flash-header">

          <h2>
            Flash Sale
          </h2>
{/* 
          <Link to="/flash-sale" className="view-all">
          View All
          </Link> */}

          <Link to="/flash-sale"
          className="view-all">View All</Link>

        </div>

        <div className="flash-grid">

          {products.map((item) => (

            <div className="flash-card" key={item.id}>

              <span className="discount">
                {item.discount}
              </span>

              <button className="wishlist">
                <FaHeart />
              </button>

              <img
                src={item.image}
                alt={item.name}
              />

              <h3>{item.name}</h3>

              <div className="rating">

                <FaStar />

                <span>{item.rating}</span>

              </div>

              <div className="price">

                <span className="new-price">
                  {item.price}
                </span>

                <span className="old-price">
                  {item.oldPrice}
                </span>

              </div>

              <button
                className="cart-btn"
                onClick={() => alert(`${item.name} added to cart!`)}
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

export default FlashSale;