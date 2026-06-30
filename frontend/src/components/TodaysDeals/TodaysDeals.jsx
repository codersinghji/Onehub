import "./TodaysDeals.css";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";

import tv from "../../assets/todaysdeals/tv.png";
import fridge from "../../assets/todaysdeals/fridge.png";
import ac from "../../assets/todaysdeals/ac.png";
import washing from "../../assets/todaysdeals/washing-machine.png";
import camera from "../../assets/todaysdeals/camera.png";
import printer from "../../assets/todaysdeals/printer.png";
import chair from "../../assets/todaysdeals/chair.png";
import table from "../../assets/todaysdeals/table.png";

const deals = [
  {
    id: 1,
    name: "Smart LED TV",
    image: tv,
    price: "₹24,999",
    oldPrice: "₹29,999",
    badge: "HOT",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Double Door Fridge",
    image: fridge,
    price: "₹31,999",
    oldPrice: "₹37,999",
    badge: "BEST",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Split AC",
    image: ac,
    price: "₹29,999",
    oldPrice: "₹35,999",
    badge: "NEW",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Washing Machine",
    image: washing,
    price: "₹18,999",
    oldPrice: "₹22,999",
    badge: "HOT",
    rating: 4.7,
  },
  {
    id: 5,
    name: "DSLR Camera",
    image: camera,
    price: "₹45,999",
    oldPrice: "₹51,999",
    badge: "BEST",
    rating: 4.8,
  },
  {
    id: 6,
    name: "Color Printer",
    image: printer,
    price: "₹8,999",
    oldPrice: "₹10,999",
    badge: "NEW",
    rating: 4.6,
  },
  {
    id: 7,
    name: "Office Chair",
    image: chair,
    price: "₹5,999",
    oldPrice: "₹7,999",
    badge: "HOT",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Study Table",
    image: table,
    price: "₹6,499",
    oldPrice: "₹8,499",
    badge: "BEST",
    rating: 4.7,
  },
];

function TodaysDeals() {
  return (
    <section className="todays-deals">
      <div className="container">

        <div className="deal-header">
          <h2>Today's Deals</h2>
          <button
           onClick={() => navigate("/product")}
            >
            View All
            </button>
        </div>

        <div className="deal-grid">

          {deals.map((item) => (
            <div className="deal-card" key={item.id}>

              <span className="deal-badge">{item.badge}</span>

              <button className="heart-btn">
                <FaHeart />
              </button>

              <img src={item.image} alt={item.name} />

              <h3>{item.name}</h3>

              <div className="deal-rating">
                <FaStar />
                <span>{item.rating}</span>
              </div>

              <div className="deal-price">
                <span className="price">{item.price}</span>
                <span className="old">{item.oldPrice}</span>
              </div>

              <button
                className="deal-cart"
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

export default TodaysDeals;