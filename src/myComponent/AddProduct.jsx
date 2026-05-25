import React, { useState } from "react";
import axios from "axios";
import ThivaAssistant from "./ThivaAssistant";

const AddProduct = () => {

    const [product, setProduct] = useState({
        productName: "",
        price: "",
        quantity: "",
        description: ""
    });

    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    };

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(product).forEach((key) => {
            formData.append(key, product[key]);
        });

        formData.append("image", image);

        axios
            .post(
                `${import.meta.env.VITE_API_URL}/addProduct`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            .then(() => {
                alert("Product added successfully");

                setProduct({
                    productName: "",
                    price: "",
                    quantity: "",
                    description: ""
                });

                setImage(null);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container mt-5">

            <div className="card p-4 shadow">

                <h2 className="text-center mb-4">
                    🌾 Add Product
                </h2>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">
                        <label>Product Name</label>

                        <input
                            type="text"
                            name="productName"
                            className="form-control"
                            placeholder="Enter product"
                            value={product.productName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Price</label>

                        <input
                            type="number"
                            name="price"
                            className="form-control"
                            placeholder="Enter price"
                            value={product.price}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Quantity</label>

                        <input
                            type="number"
                            name="quantity"
                            className="form-control"
                            placeholder="Enter quantity"
                            value={product.quantity}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Description</label>

                        <textarea
                            name="description"
                            className="form-control"
                            placeholder="Description"
                            value={product.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-3">
                        <label>Product Image</label>

                        <input
                            type="file"
                            className="form-control"
                            onChange={handleImage}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success w-100"
                    >
                        Add Product
                    </button>

                </form>

                <ThivaAssistant />

            </div>

        </div>
    );

};

export default AddProduct;

