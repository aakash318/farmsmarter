import React from "react";
import "./myStyle/HeroSection.css";
import { useNavigate } from "react-router-dom";
import Farmer from "./Farmer";
const HeroSection = () => {

    const navigate = useNavigate();

    return (

        <div className="hero-wrapper">

            {/* HERO */}

            <section
                className="hero-section d-flex align-items-center text-white"
                id="parent"
            >

                <div className="overlay"></div>

                <div className="container position-relative">

                    <div className="row align-items-center">

                        <div className="col-lg-6">

                            <div className="hero-badge">

                                🚀 AI Powered Agriculture Platform

                            </div>

                            <h1 className="hero-title">

                                FarmSmarter <br />

                                <span>with THIVA AI</span>

                            </h1>

                            <p className="hero-text mt-4">

                                Smarter farming starts here.
                                Diagnose crop diseases,
                                manage farm costs,
                                upload products through AI voice
                                and connect directly with buyers.

                            </p>

                            <div className="login d-flex gap-3 mt-4">

                                <button
                                    className="btn btn-success px-4 py-3"
                                    onClick={() => {
                                        navigate("/farmer/farmerRegister")
                                    }}
                                >

                                    Register

                                </button>

                                <button
                                    className="btn btn-outline-light px-4 py-3"
                                    onClick={() => {
                                        navigate("/farmer/farmerLogin")
                                    }}
                                >

                                    Login

                                </button>

                            </div>

                            <div className="stats-container">

                                <div className="stat-box">

                                    <h3>15K+</h3>

                                    <p>Farmers</p>

                                </div>

                                <div className="stat-box">

                                    <h3>25K+</h3>

                                    <p>Products</p>

                                </div>

                                <div className="stat-box">

                                    <h3>4.9⭐</h3>

                                    <p>Ratings</p>

                                </div>

                            </div>

                        </div>


                        <div className="col-lg-6">

                            <div className="thiva-card">

                                <div className="thiva-top">

                                    🤖 THIVA Assistant

                                </div>

                                <div className="message">

                                    THIVA Activated...

                                </div>

                                <div className="message">

                                    Listening for product...

                                </div>

                                <div className="message user">

                                    Tomato Quantity 50 Price ₹20

                                </div>

                                <div className="message">

                                    Product Added Successfully ✅

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* FEATURES */}

            <section className="features-section">

                <div className="container">

                    <h2 className="section-title">

                        Powerful Features

                    </h2>

                    <div className="row g-4">

                        <div className="col-md-3">

                            <div className="feature-card">

                                🌱

                                <h4>Crop Health</h4>

                                <p>

                                    Detect crop diseases
                                    using AI.

                                </p>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="feature-card">

                                🎤

                                <h4>Voice Upload</h4>

                                <p>

                                    Upload products using
                                    THIVA voice assistant.

                                </p>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="feature-card">

                                📈

                                <h4>Track Costs</h4>

                                <p>

                                    Monitor expenses and
                                    farming data.

                                </p>

                            </div>

                        </div>


                        <div className="col-md-3">

                            <div className="feature-card">

                                🛒

                                <h4>Marketplace</h4>

                                <p>

                                    Sell directly to
                                    buyers.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            <Farmer />




            {/* ABOUT */}

            <section className="developer-section">

                <div className="container">

                    <div className="developer-card">

                        <div className="developer-icon">

                            👨‍💻

                        </div>


                        <div>

                            <h2>

                                About Developer

                            </h2>

                            <p>

                                Hi, I'm <b>Aakash Pathak</b>,
                                currently pursuing graduation
                                and passionate about using
                                technology in agriculture.

                                FarmSmarter was created
                                to simplify farming and help
                                smallholder farmers use AI
                                to improve productivity and
                                market access.

                            </p>

                        </div>


                    </div>

                </div>

            </section>

        </div>

    );

};

export default HeroSection;