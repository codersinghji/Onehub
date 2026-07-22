import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save JWT Token
        localStorage.setItem("token", data.token);

        // Save User (optional)
        if (data.user) {
          localStorage.setItem("user", JSON.stringify(data.user));
        }

        setMessage("Login Successful ✅");

        setTimeout(() => {
          navigate("/");
        }, 1000);

      } else {
        setMessage(data.message);
      }

    } catch (error) {
      console.error(error);
      setMessage("Server Error");
    }
  };

  return (
    <>
      <Navbar />

      <section className="login-page">
        <div className="login-container">

          <h2>Welcome Back</h2>
          <p>Login to your OneHub account</p>

          <form className="login-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label>Password</label>

              <div className="password-box">

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />

                <span
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>

              </div>
            </div>

            <div className="login-options">
              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <Link to="/forgot-password">
                Forgot Password?
              </Link>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>

            {message && <p className="message">{message}</p>}

          </form>

          <p className="register-link">
            Don't have an account?
            <Link to="/register"> Register</Link>
          </p>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Login;