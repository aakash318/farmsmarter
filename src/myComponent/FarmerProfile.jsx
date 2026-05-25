import React, { useState, useEffect } from "react";
import "./myStyle/FarmerProfile.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FarmerProfile = () => {
   const navigate=useNavigate();
    const farmer = {
        name: "Aakash pathak",
        location: "Delhi",
        phone: "9876543210",
        profile: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetchProducts();

    }, []);

    const fetchProducts = () => {

        axios
            .get(`${import.meta.env.VITE_API_URL}/products`)

            .then((res) => {

                setProducts(res.data);

            })

            .catch((err) => {

                console.log(err);

            });

    };

    const deleteProduct = (id) => {

        axios
            .delete(`${import.meta.env.VITE_API_URL}/deleteProduct/${id}`)

            .then(() => {

                setProducts(
                    products.filter(
                        (item) => item.id !== id
                    )
                );

                alert("Product removed");

            })

            .catch((err) => {

                console.log(err);

            });

    };

    return (

        <div className="container py-5">

            <div className="profile-card">

                <div className="row align-items-center">

                    <div className="col-md-3 text-center">

                        <img
                            src={farmer.profile}
                            alt="profile"
                            className="profile-img"
                        />

                    </div>

                    <div className="col-md-6">

                        <h2 className="fw-bold">

                            {farmer.name}

                        </h2>

                        <p>📍 {farmer.location}</p>

                        <p>📞 {farmer.phone}</p>

                        <p>

                            Products Added:

                            <span className="badge bg-success ms-2">

                                {products.length}

                            </span>

                        </p>

                    </div>

                    <div className="col-md-3 text-center">

                        <button
                            className="btn btn-success add-btn"
                            onClick={() => {
                                navigate("/profile/addProduct")
                            }}
                        >

                            + Add Product

                        </button>

                    </div>

                </div>

            </div>

            <h3 className="mt-5 mb-4">

                My Products 🌾

            </h3>

            <div className="row g-4">

                {products.map((item) => (

                    <div
                        className="col-md-4"
                        key={item.id}
                    >

                        <div className="modern-card">

                            <div className="image-box">

                                <img
                                    src={`${import.meta.env.VITE_API_URL}/uploads/${item.image}`}
                                    alt={item.productName}
                                    className="product-img"
                                />

                                <div className="price-tag">

                                    ₹ {item.price}

                                </div>

                            </div>

                            <div className="card-body">

                                <h5 className="fw-bold">

                                    {item.productName}

                                </h5>

                                <p className="text-muted">

                                    Quantity :
                                    {item.quantity}

                                </p>

                                <div
                                    className="d-flex justify-content-between"
                                >

                                    <button
                                        className="btn btn-outline-success"
                                    >

                                        Edit

                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            deleteProduct(item.id)
                                        }}
                                    >

                                        Remove

                                    </button>

                                </div>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default FarmerProfile;