import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let data = localStorage.getItem(email);
    if (data) {
      data = JSON.parse(data);
      if (data.password !== password) {
        alert("Invalid credentials");
        return;
      }
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("LoggedMail", email);
      // Notify other components (like Navbar) of login
      window.dispatchEvent(new Event("storage"));
      navigate("/");
      return;
    } else {
      alert("User not found");
      navigate("/signup");
      return;
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="forgot-password">
          <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <button type="submit">Login</button>
      </form>
      <div className="signup-link">
        Don’t have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
