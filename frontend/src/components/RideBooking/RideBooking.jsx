import "./RideBooking.css";
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaMotorcycle,
  FaCar,
  FaTaxi,
  FaWallet,
} from "react-icons/fa";

import rideBanner from "../../assets/ride/ride-banner.png";

const rides = [
  {
    id: 1,
    type: "Bike",
    icon: <FaMotorcycle />,
    price: "₹69",
    time: "4 mins",
  },
  {
    id: 2,
    type: "Auto",
    icon: <FaTaxi />,
    price: "₹99",
    time: "6 mins",
  },
  {
    id: 3,
    type: "Car",
    icon: <FaCar />,
    price: "₹149",
    time: "8 mins",
  },
];

function RideBooking() {
  const [selectedRide, setSelectedRide] = useState(rides[0]);

  const handleBooking = () => {
    alert(
      `${selectedRide.type} booked successfully!\nFare: ${selectedRide.price}`
    );
  };

  return (
    <section className="ride-booking">

      <div className="container">

        <div className="ride-header">

          <div>
            <h2>Ride Booking</h2>
            <p>Fast • Safe • Affordable</p>
          </div>

          <button className="view-btn">
            View All
          </button>

        </div>

        <div className="ride-wrapper">

          {/* Left */}

          <div className="ride-left">

            <h3>Book Your Ride</h3>

            <p>
              Enter your pickup and destination to find the best ride.
            </p>

            <div className="input-box">
              <FaMapMarkerAlt />
              <input
                type="text"
                placeholder="Pickup Location"
              />
            </div>

            <div className="input-box">
              <FaMapMarkerAlt />
              <input
                type="text"
                placeholder="Destination"
              />
            </div>

            <h4 className="ride-title">
              Select Ride
            </h4>

            <div className="ride-list">

              {rides.map((ride) => (

                <div
                  key={ride.id}
                  className={
                    selectedRide.id === ride.id
                      ? "ride-card active"
                      : "ride-card"
                  }
                  onClick={() => setSelectedRide(ride)}
                >

                  <div className="ride-icon">
                    {ride.icon}
                  </div>

                  <div className="ride-info">

                    <h5>{ride.type}</h5>

                    <span>{ride.time}</span>

                  </div>

                  <div className="ride-price">
                    {ride.price}
                  </div>

                </div>

              ))}

            </div>

            <div className="payment-box">

              <FaWallet />

              <span>Payment : Cash / UPI / Card</span>

            </div>

            <button
              className="book-btn"
              onClick={handleBooking}
            >
              Book {selectedRide.type}
            </button>

          </div>

          {/* Right */}

          <div className="ride-right">

            <img
              src={rideBanner}
              alt="Ride Booking"
            />

            <div className="ride-info-card">

              <h3>{selectedRide.type}</h3>

              <p>Estimated Arrival</p>

              <h4>{selectedRide.time}</h4>

              <h2>{selectedRide.price}</h2>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default RideBooking;