import "./Grocery.css";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

import banner from "../../assets/grocery/grocery-banner.png";
import fruits from "../../assets/grocery/fruits.png";
import vegetables from "../../assets/grocery/vegetables.png";
import dairy from "../../assets/grocery/dairy.png";
import bakery from "../../assets/grocery/bakery.png";
import beverages from "../../assets/grocery/beverages.png";
import snacks from "../../assets/grocery/snacks.png";

const groceryItems = [
  {
    id: 1,
    name: "Fresh Fruits",
    image: fruits,
  },
  {
    id: 2,
    name: "Vegetables",
    image: vegetables,
  },
  {
    id: 3,
    name: "Dairy",
    image: dairy,
  },
  {
    id: 4,
    name: "Bakery",
    image: bakery,
  },
  {
    id: 5,
    name: "Beverages",
    image: beverages,
  },
  {
    id: 6,
    name: "Snacks",
    image: snacks,
  },
];

function Grocery() {
  return (
    <section className="grocery">

      <div className="container">

        <div className="grocery-header">
          <h2>Grocery</h2>
             
           {/* <Link to="/grocery-products" className="view-all">
            View All
           </Link> */}

          {/* <Link to="/flash-sale" className="view-all">
          View All
          </Link> */}
          <Link to="/grocery-products"
          className="view-all"
          >View All</Link>


        </div>

        <div className="grocery-content">

          <div className="grocery-left">

            <h3>Fresh Groceries Delivered Fast</h3>

            <p>
              Shop fresh fruits, vegetables, dairy products,
              bakery items, beverages and snacks at the best prices.
            </p>

            <div className="grocery-grid">

              {groceryItems.map((item) => (
                <div className="grocery-card" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <h4>{item.name}</h4>

                </div>
              ))}

            </div>

            <button className="shop-btn">
              Shop Grocery
              <FaArrowRight />
            </button>

          </div>

          <div className="grocery-right">

            <img
              src={banner}
              alt="Grocery Banner"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Grocery;