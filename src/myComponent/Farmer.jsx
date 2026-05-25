import React from 'react'
import "./myStyle/Farmer.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.jsx";


const Farmer = ({ count, setCount, bill, setBill }) => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:5000/products")

            .then((res) => {
                setProducts(res.data);
            })

            .catch((err) => {
                console.log(err);
            });

    }, []);


    return (

        <div className='container pt-5 pb-5'>

            <div className='row g-4'>

                {products.map((items) => (

                    <div
                        className="col-md-4"
                        key={items.id}
                    >

                        <div
                            className="modern-card"
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                                navigate(`/product/${items.id}`)
                            }}
                        >

                            <div className="image-box">

                                <img
                                    src={`http://localhost:5000/uploads/${items.image}`}
                                    alt={items.productName}
                                    className="product-img"
                                />

                                <span className="price-tag">

                                    ₹ {items.price}

                                </span>

                            </div>

                            <div className="card-body">

                                <h4 className='fw-bold'>
                                    {items.productName}
                                </h4>

                                <p className='text-muted'>
                                    Fresh farm product 🌱
                                </p>

                                <div className='d-flex justify-content-between'>

                                    <button
                                        className="btn btn-success"
                                    >
                                        Add To Cart

                                    </button>

                                    <button
                                        className="btn btn-outline-success"
                                        onClick={(e) => {

                                            e.stopPropagation();

                                            navigate(`/product/${items.id}`);

                                        }}
                                    >

                                        Details

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

export default Farmer;