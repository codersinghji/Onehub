import "./Pharmacy.css";
import { Link } from "react-router-dom";

import { FaArrowRight } from "react-icons/fa";

import banner from "../../assets/pharmacy/pharmacy-banner.png";
import medicine from "../../assets/pharmacy/medicine.png";
import healthcare from "../../assets/pharmacy/healthcare.png";
import personalcare from "../../assets/pharmacy/personalcare.png";
import babycare from "../../assets/pharmacy/babycare.png";


const categories = [
  {
    id: 1,
    name: "Medicines",
    image: medicine,
  },
  {
    id: 2,
    name: "Healthcare",
    image: healthcare,
  },
  {
    id: 3,
    name: "Personal Care",
    image: personalcare,
  },
  {
    id: 4,
    name: "Baby Care",
    image: babycare,
  },
];

function Pharmacy() {
  return (
    <section className="pharmacy">

      <div className="container">

        <div className="pharmacy-header">
          <h2>Pharmacy</h2>

            {/* <Link to="/pharmacy-products" className="view-all">
             View All
             </Link> */}
              {/* <Link to="/flash-sale" className="view-all">
                View All
              </Link> */}

              <Link to="/pharmacy-products"
              className="view-all"
              >View All</Link>


        </div>

        <div className="pharmacy-content">

          <div className="pharmacy-left">

            <h3>Your Health, Our Priority</h3>

            <p>
              Order medicines, healthcare essentials,
              baby care products and personal care items
              with fast delivery.
            </p>

            <div className="pharmacy-grid">

              {categories.map((item) => (
                <div className="pharmacy-card" key={item.id}>

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <h4>{item.name}</h4>

                </div>
              ))}

            </div>

            <button className="shop-btn">
              Shop Now
              <FaArrowRight />
            </button>

          </div>

          <div className="pharmacy-right">

            <img
              src={banner}
              alt="Pharmacy Banner"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default Pharmacy;