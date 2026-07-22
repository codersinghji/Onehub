import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaEdit,
  FaSignOutAlt,
} from "react-icons/fa";

function Profile() {
  return (
    <>
      <Navbar />

      <section className="profile-page">
        <div className="profile-container">

          <div className="profile-header">

            <FaUserCircle className="profile-avatar" />

            <h2>My Profile</h2>

            <p>Manage your personal information</p>

          </div>

          <div className="profile-info">

            <div className="info-card">
              <FaUserCircle className="info-icon" />
              <div>
                <h4>Full Name</h4>
                <p>Ravishekh Singh</p>
              </div>
            </div>

            <div className="info-card">
              <FaEnvelope className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>ravishekh@gmail.com</p>
              </div>
            </div>

            <div className="info-card">
              <FaPhone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <div>
                <h4>Address</h4>
                <p>New Delhi, India</p>
              </div>
            </div>

          </div>

          <div className="profile-buttons">

            <button className="edit-btn">
              <FaEdit />
              Edit Profile
            </button>

            <button className="logout-btn">
              <FaSignOutAlt />
              Logout
            </button>

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Profile;