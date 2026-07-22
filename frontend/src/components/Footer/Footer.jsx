import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaGooglePay,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company */}

        <div className="footer-box">

          <h2>OneHub</h2>

          <p>
            Your all-in-one platform for Shopping, Grocery,
            Pharmacy, Ride Booking and Metro Booking.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaTwitter />
            </a>

            <a href="#">
              <FaLinkedinIn />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Flash Sale</a></li>
            <li><a href="#">Today's Deals</a></li>
            <li><a href="#">Featured Products</a></li>
          </ul>

        </div>

        {/* Services */}

        <div className="footer-box">

          <h3>Services</h3>

          <ul>
            <li><a href="#">Shopping</a></li>
            <li><a href="#">Pharmacy</a></li>
            <li><a href="#">Grocery</a></li>
            <li><a href="#">Ride Booking</a></li>
            <li><a href="#">Metro Booking</a></li>
          </ul>

        </div>

        {/* Contact */}

        <div className="footer-box">

          <h3>Contact</h3>

          <p>Email : support@onehub.com</p>

          <p>Phone : +91 98765 43210</p>

          <p>Location : India</p>

          <div className="payment-icons">

            <FaCcVisa />

            <FaCcMastercard />

            <FaGooglePay />

          </div>

        </div>

      </div>

      {/* Newsletter */}

      <div className="newsletter">

        <h3>Subscribe to our Newsletter</h3>

        <div className="newsletter-box">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 OneHub. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;