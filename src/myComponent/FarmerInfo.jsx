
import React from "react";
import "./myStyle/FarmerInfo.css";
import {
    FaTractor,
    FaSeedling,
    FaUsers,
    FaTruck,
    FaChartLine,
    FaLeaf
} from "react-icons/fa";

const FarmerInfo = () => {
    return (

        <div className="farmer-page">



            <section className="farmer-hero">

                <div className="container">

                    <div className="hero-content">

                        <h1>

                            🌾 Farmers Grow. We Connect. Customers Enjoy.

                        </h1>

                        <p>

                            Farm2Table creates a direct bridge between farmers and
                            customers. We help local farmers sell fresh products
                            without middlemen, giving better profits to farmers and
                            better quality food to consumers.

                        </p>

                        <button className="hero-btn">

                            Become a Partner Farmer

                        </button>

                    </div>

                </div>

            </section>


            {/* HOW IT WORKS */}

            <section className="process-section container">

                <h2 className="section-title">

                    How Farm2Table Works

                </h2>

                <div className="row g-4">

                    <div className="col-md-3">

                        <div className="process-card">

                            <FaSeedling className="process-icon" />

                            <h4>1. Farmer Registration</h4>

                            <p>

                                Farmers register with our platform and create
                                their profile.

                            </p>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="process-card">

                            <FaTractor className="process-icon" />

                            <h4>2. Add Products</h4>

                            <p>

                                Farmers upload vegetables, fruits, grains,
                                and organic products.

                            </p>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="process-card">

                            <FaUsers className="process-icon" />

                            <h4>3. Customer Orders</h4>

                            <p>

                                Customers browse and buy directly from farmers.

                            </p>

                        </div>

                    </div>

                    <div className="col-md-3">

                        <div className="process-card">

                            <FaTruck className="process-icon" />

                            <h4>4. Fast Delivery</h4>

                            <p>

                                Fresh products reach customers quickly.

                            </p>

                        </div>

                    </div>

                </div>

            </section>




            <section className="benefit-section">

                <div className="container">

                    <h2 className="section-title">

                        Why Farmers Join Us

                    </h2>

                    <div className="row g-5">

                        <div className="col-md-6">

                            <div className="benefit-box">

                                <h3>💰 Better Income</h3>

                                <p>

                                    No middlemen means farmers keep more of the
                                    profit and receive fair prices.

                                </p>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="benefit-box">

                                <h3>📈 Business Growth</h3>

                                <p>

                                    Reach thousands of customers and increase sales.

                                </p>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="benefit-box">

                                <h3>🌱 Organic Focus</h3>

                                <p>

                                    Promote sustainable and healthy farming practices.

                                </p>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="benefit-box">

                                <h3>🚚 Easy Logistics</h3>

                                <p>

                                    We simplify product management and delivery.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>




            <section className="stats-section">

                <div className="container">

                    <div className="row text-center">

                        <div className="col-md-3">

                            <div className="stat-card">

                                <h1>500+</h1>

                                <p>Farmers Connected</p>

                            </div>

                        </div>

                        <div className="col-md-3">

                            <div className="stat-card">

                                <h1>10K+</h1>

                                <p>Orders Delivered</p>

                            </div>

                        </div>

                        <div className="col-md-3">

                            <div className="stat-card">

                                <h1>50+</h1>

                                <p>Cities Served</p>

                            </div>

                        </div>

                        <div className="col-md-3">

                            <div className="stat-card">

                                <h1>95%</h1>

                                <p>Customer Satisfaction</p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>




            <section className="join-section">

                <div className="container text-center">

                    <FaLeaf className="join-icon" />

                    <h1>

                        Join Farm2Table Today

                    </h1>

                    <p>

                        Become a part of the future of agriculture.
                        Connect with customers, grow your business,
                        and deliver freshness directly from farm to table.

                    </p>

                    <button className="join-btn">

                        Start Your Journey

                    </button>

                </div>

            </section>

        </div>

    )
}

export default FarmerInfo;





