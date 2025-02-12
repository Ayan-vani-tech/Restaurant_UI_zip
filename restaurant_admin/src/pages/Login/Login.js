import React, { useState } from "react";
import "./Login.css";

import logo from "../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Event handler for input changes
  const handleInputChange = (fieldName, value) => {
    setForm((prevForm) => ({
      ...prevForm,
      [fieldName]: value,
    }));
  };

  return (
    <div className="Login">
      <img src={logo} className="logo" alt="logo" />
      <h1 className="head-admin">Howdy.. Admin</h1>
      <div className="input-container">
        {/* Email Input */}
        <>
          <label className="input-label" htmlFor="emailInput">
            Email
          </label>
          <input
            type="text"
            id="emailInput"
            placeholder="example@gmail.com"
            className="input"
            value={form.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
          />
        </>

        {/* Password Input */}
        <>
          <label className="input-label" htmlFor="passwordInput">
            Password
          </label>
          <input
            type="password" // Use type="password" for password input
            id="passwordInput"
            placeholder="Enter Here"
            className="input"
            value={form.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
          />
        </>

        <div className="remember-me-box">
          <input
            type="radio"
            value="option3"
            // checked={selectedOption === "option3"}
            // onChange={handleOptionChange}
          />
          <p className="remember-me">Remember me</p>
        </div>

        <button
          className="login-btn cursor_pointer"
          onClick={() => navigate("/")}
        >
          LOG IN
        </button>
      </div>
    </div>
  );
};

export default Login;
