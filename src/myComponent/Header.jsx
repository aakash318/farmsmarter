import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import "./myStyle/Header.css";
import Logo from "./public/Logo.png";

const Header = ({ count }) => {

    const navigate = useNavigate();

    return (

        <div>

            <nav className="modern-navbar navbar navbar-expand-lg">

                <div className="container">

                    <a className="navbar-brand">

                        <img
                            src={Logo}
                            className="logo-img"
                            alt="logo"
                        />

                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >

                        <span className="navbar-toggler-icon"></span>

                    </button>

                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >

                        <ul className="navbar-nav mx-auto gap-4">

                            <li className="nav-item">

                                <div
                                    className="nav-btn"
                                    onClick={() => navigate("/")}
                                >

                                    🏠 Home

                                </div>

                            </li>

                            <li className="nav-item">

                                <div
                                    className="nav-btn"
                                    onClick={() => navigate("/farmerinfo")}
                                >

                                    👨‍🌾 Farmers

                                </div>

                            </li>

                            <li className="nav-item">

                                <div
                                    className="nav-btn"
                                    onClick={() => navigate("/farmer")}
                                >

                                    🏪 Store

                                </div>

                            </li>

                        </ul>

                        <div
                            className="cart-container"
                            onClick={() => navigate("/cart")}
                        >

                            <FaShoppingCart
                                className="cart-icon"
                            />

                            <span className="cart-count">

                                {count}

                            </span>

                        </div>

                    </div>

                </div>

            </nav>

        </div>

    )

}

export default Header;