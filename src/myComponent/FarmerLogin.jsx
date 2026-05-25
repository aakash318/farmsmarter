import React from "react";
import "./myStyle/FarmerLogin.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const FarmerLogin = () => {
  const navigate = useNavigate();
  const [FormData, setFormDate] = useState(
    {
      email: "",
      password: ""
    }
  )
  const handleChange = (e) => {
    setFormDate({
      ...FormData, [e.target.name]: e.target.value
    }
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/login`, FormData).then((res) => {
      alert("login successs")
      navigate("/farmer/profile");
    }).catch((err) => { console.log(err) })
    console.log("something happend");

  }
  return (
    <div className="login-container">

      <div className="overlay"></div>

      <div className="login-card">

        <h1>🌾 Farmer Login</h1>
        <p>Welcome back to your farming dashboard</p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <input
              type="email"
              className="form-control input-box"
              placeholder="Enter Email"
              name="email"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control input-box"
              placeholder="Enter Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <button className="btn login-btn w-100"
            type="submit">
            Login
          </button>

          <div className="extra-text mt-3">
            Don't have an account?
            <span onClick={() => { navigate("/farmer/farmerRegister") }}> Register</span>
          </div>

        </form>

      </div>

    </div>
  );
};

export default FarmerLogin;