import React, { useState } from "react";
import axios from "axios";
import "./myStyle/Checkout.css";
import { useNavigate } from "react-router-dom";

const Checkout = ({ totalBill, setTotalBill }) => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        address: "",
        pincode: ""

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });

    };

    const handlePayment = async () => {

        try {

            if (
                !formData.name ||
                !formData.email ||
                !formData.phone ||
                !formData.address ||
                !formData.pincode
            ) {

                alert("Please fill all details");

                return;

            }

            const response = await axios.post(
                "http://localhost:5000/payment/create-order",
                {
                    amount: totalBill
                }
            );

            const order = response.data.order;

            const options = {

                key: "rzp_test_StCNA9zoCQeyHa",

                amount: order.amount,

                currency: order.currency,

                name: "farm2table Store",

                description: "Product Payment",

                order_id: order.id,

                handler: async function (response) {

                    console.log("Payment Success:", response);

                    try {

                        await axios.post(
                            "http://localhost:5000/payment/success",
                            {
                                razorpay_payment_id: response.razorpay_payment_id,
                                razorpay_order_id: response.razorpay_order_id
                            }
                        );

                        navigate("/order-success", {
                            state: {
                                customerData: {
                                    name: formData.name,
                                    email: formData.email,
                                    phone: formData.phone,
                                    address: formData.address
                                }
                            }
                        });

                    }

                    catch (err) {

                        console.log(err);

                        alert("Payment done but order not saved");

                    }

                },

                prefill: {

                    name: formData.name,

                    email: formData.email,

                    contact: formData.phone

                },

                notes: {

                    address: formData.address

                },

                theme: {

                    color: "#0d6efd"

                }

            };

            const razor = new window.Razorpay(options);

            razor.open();

        }

        catch (err) {

            console.log(err);

            alert("Payment Failed");

        }

    };

    return (

        <div className="checkout-container container py-5">

            <h1 className="text-center fw-bold mb-5">

                🛍 Checkout

            </h1>

            <div className="row">

                <div className="col-lg-8">

                    <div className="checkout-form-card">

                        <h3 className="mb-4">

                            Delivery Details

                        </h3>

                        <div className="row">

                            <div className="col-md-6 mb-3">

                                <label>Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control custom-input"
                                    placeholder="Enter full name"
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label>Phone Number</label>

                                <input
                                    type="number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="form-control custom-input"
                                    placeholder="Enter phone"
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label>Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control custom-input"
                                    placeholder="Enter email"
                                />

                            </div>

                            <div className="col-md-6 mb-3">

                                <label>Pincode</label>

                                <input
                                    type="number"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    className="form-control custom-input"
                                    placeholder="Enter pincode"
                                />

                            </div>

                            <div className="col-12 mb-3">

                                <label>Address</label>

                                <textarea
                                    rows="4"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="form-control custom-input"
                                    placeholder="Enter address"
                                ></textarea>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="col-lg-4">

                    <div className="payment-card">

                        <h3 className="mb-4">

                            Payment Summary

                        </h3>

                        <div className="price-row">

                            <span>Subtotal</span>

                            <span>{totalBill}</span>

                        </div>

                        <div className="price-row">

                            <span>Delivery</span>

                            <span>₹50</span>

                        </div>

                        <div className="price-row">

                            <span>Discount</span>

                            <span className="text-success">

                                -₹100

                            </span>

                        </div>

                        <hr />

                        <div className="price-row total-price">

                            <span>Total</span>

                            <span>

                                {`₹${totalBill}`}

                            </span>

                        </div>

                        <button
                            className="pay-btn mt-4"
                            onClick={handlePayment}
                        >

                            Proceed To Pay

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Checkout;