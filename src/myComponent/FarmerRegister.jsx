import React from 'react'
import { data, useNavigate } from 'react-router-dom'
import axios from "axios";
import { useState } from 'react';

const FarmerRegister = () => {
  const navigate = useNavigate();
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    farmLocation: ""
  })
  const handleChange = (e) => {
    setFormData({
      ...FormData, [e.target.name]: e.target.value
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${import.meta.env.VITE_API_URL}/register`, FormData)
      .then((res) => { res.send(data) 
        navigate("/farmer/farmerLogin") })
      .catch((err) => {
        console.log(err);
      })

  }


  return (

    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #11998e, #38ef7d)"
      }}
    >


      <div className="row justify-content-center">

        <div className="col-md-6">

          <div
            className="card border-0 shadow-lg p-4"
            style={{
              borderRadius: "25px",
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)"
            }}
          >

            <div className="text-center mb-4">

              <img
                src="farmer.png"
                alt="farmer"
                width="100"
              />

              <h1 className="fw-bold text-white mt-3">
                Farmer Registration
              </h1>

              <p className="text-light">
                Join India's Smart Farming Network 🌱
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">

                <label className="form-label text-white">
                  Full Name
                </label>

                <input
                  name='name'
                  type="text"
                  className="form-control p-3"
                  placeholder="Enter your name"
                  onChange={handleChange}
                />

              </div>

              <div className="mb-3">

                <label className="form-label text-white">
                  Email Address
                </label>

                <input
                  name='email'
                  type="email"
                  className="form-control p-3"
                  placeholder="Enter your email"
                  onChange={handleChange}
                />

              </div>

              <div className="mb-3">

                <label className="form-label text-white">
                  Phone Number
                </label>

                <input
                  name='phoneNumber'
                  type="number"
                  className="form-control p-3"
                  placeholder="Enter phone number"
                  onChange={handleChange}
                />

              </div>

              <div className="mb-3">

                <label className="form-label text-white">
                  Farm Location
                </label>

                <input
                  name='farmLocation'
                  type="text"
                  className="form-control p-3"
                  placeholder="Village / City"
                  onChange={handleChange}
                />

              </div>

              <div className="mb-3">

                <label className="form-label text-white">
                  Password
                </label>

                <input
                  name='password'
                  type="password"
                  className="form-control p-3"
                  placeholder="Create password"
                  onChange={handleChange}
                />

              </div>

              <button
                className="btn btn-success w-100 py-3 fw-bold"
                style={{
                  borderRadius: "15px",
                  fontSize: "18px"

                }}

              >
                Register Now
              </button>

            </form>

            <div className="text-center mt-4 text-light">

              Already have an account?

              <span
                className="fw-bold ms-2"
                style={{ cursor: "pointer" }}
                onClick={() => { navigate("/farmer/farmerLogin") }}
              >
                Login
              </span>

            </div>

          </div>

        </div>

      </div>


    </div>
  )
}

export default FarmerRegister