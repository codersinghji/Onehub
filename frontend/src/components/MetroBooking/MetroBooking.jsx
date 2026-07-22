import "./MetroBooking.css";
import { useState } from "react";
import {
  FaTrain,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

import metroBanner from "../../assets/metro/metro-banner.png";

function MetroBooking() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [passengers, setPassengers] = useState(1);
  const [travelClass, setTravelClass] = useState("Standard");

  const handleSearch = () => {
    if (!from || !to) {
      alert("Please enter From and To stations.");
      return;
    }

    alert(
      `Searching Metro\n\nFrom: ${from}\nTo: ${to}\nPassengers: ${passengers}\nClass: ${travelClass}`
    );
  };

  return (
    <section className="metro-booking">

      <div className="container">

        <div className="metro-header">

          <div>
            <h2>Metro Booking</h2>
            <p>Travel Fast • Safe • Comfortable</p>
          </div>

          <button className="view-btn">
            View Routes
          </button>

        </div>

        <div className="metro-wrapper">

          {/* Left Side */}

          <div className="metro-left">

            <h3>Search Your Metro</h3>

            <p>
              Book metro tickets quickly and enjoy a smooth
              journey across the city.
            </p>

            <div className="input-box">
              <FaMapMarkerAlt />
              <input
                type="text"
                placeholder="From Station"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>

            <div className="input-box">
              <FaMapMarkerAlt />
              <input
                type="text"
                placeholder="To Station"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>

            <div className="input-box">
              <FaCalendarAlt />
              <input type="date" />
            </div>

            <div className="input-box">
              <FaUsers />

              <select
                value={passengers}
                onChange={(e) => setPassengers(e.target.value)}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <div className="input-box">
              <FaTrain />

              <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
              >
                <option>Standard</option>
                <option>Premium</option>
                <option>Business</option>
              </select>
            </div>

            <button
              className="search-btn"
              onClick={handleSearch}
            >
              Search Metro
            </button>

          </div>

          {/* Right Side */}

          <div className="metro-right">

            <img
              src={metroBanner}
              alt="Metro"
            />

            <div className="metro-card">

              <h3>Next Available</h3>

              <p>Metro arrives in</p>

              <h2>5 Minutes</h2>

              <span>Fast • Affordable • Comfortable</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MetroBooking;