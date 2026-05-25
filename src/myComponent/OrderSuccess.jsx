import React from "react";
import "./myStyle/OrderSuccess.css";
import {
    FaCheckCircle,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaTruck
} from "react-icons/fa";

import { useLocation } from "react-router-dom";

const OrderSuccess = () => {

    const location = useLocation();

    const customerData = location.state?.customerData || {
        name: "Guest",
        email: "No Email",
        phone: "No Phone",
        address: "No Address"
    };

    return (

        <div className="success-wrapper">

            <div className="success-card">

                <FaCheckCircle className="success-icon" />

                <h1>Order Confirmed 🎉</h1>

                <p className="success-subtitle">

                    Thank you for shopping with Farm2Table.
                    Your order has been placed successfully.

                </p>

                <div className="customer-details">

                    <h3>Your Details</h3>

                    <div className="detail-row">
                        <FaUser className="detail-icon" />
                        <span>{customerData.name}</span>
                    </div>

                    <div className="detail-row">
                        <FaEnvelope className="detail-icon" />
                        <span>{customerData.email}</span>
                    </div>

                    <div className="detail-row">
                        <FaPhone className="detail-icon" />
                        <span>{customerData.phone}</span>
                    </div>

                    <div className="detail-row">
                        <FaMapMarkerAlt className="detail-icon" />
                        <span>{customerData.address}</span>
                    </div>

                </div>

                <div className="delivery-box">

                    <FaTruck className="truck-icon" />

                    <div>

                        <h4>Estimated Delivery</h4>

                        <p>
                            Your fresh products will arrive within
                            <b> 2 days 🌱</b>
                        </p>

                    </div>

                </div>

                <button
                    className="home-btn"
                    onClick={() => window.location.href = "/"}
                >

                    Continue Shopping

                </button>

            </div>

        </div>

    )

}

export default OrderSuccess;