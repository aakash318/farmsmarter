import React, { useEffect, useState } from "react";
import axios from "axios";
import "./myStyle/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ count, setCount, bill, setBill, totalBill, setTotalBill }) => {

    const navigate1 = useNavigate();

    const [quantity, setQuantity] = useState(0);

    const quantities = (id) => {

        const product = cartItems.find(item => item.id === id);

        setCartItems(
            cartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: Number(item.quantity) + 1 }
                    : item
            )
        );

        setBill(prev => prev + Number(product.price));

    };

    const quantities1 = (id) => {

        const product = cartItems.find(item => item.id === id);

        setCartItems(
            cartItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: Number(item.quantity) - 1 }
                    : item
            )
        );

        setBill(prev => prev - Number(product.price));

    };

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:5000/cart/1")
            .then((res) => {
                setCartItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            });

    }, []);

    const deleteProduct = (id) => {

        const product = cartItems.find(item => item.id === id);

        axios.delete(`http://localhost:5000/cart/${id}`)
            .then(() => {

                setCartItems(prev =>
                    prev.filter(item => item.id !== id)
                );

                console.log("product deleted");

                setCount(prev => prev - 1);

                setBill(prev => prev - Number(product.price));

                setTotalBill(prev => prev - Number(product.price));

            })
            .catch((err) => {
                console.log(err);
            });

    };

    const totalBillone = Number(bill) + 20;

    useEffect(() => {

        setTotalBill(totalBillone);

    }, [bill]);

    return (

        <div className="container py-5">

            <h1 className="fw-bold mb-5 text-center">
                🛒 My Cart
            </h1>

            <div className="row g-4">

                {cartItems.map((item) => (

                    <div key={item.id} className="col-12">

                        <div className="cart-modern-card">

                            <div className="cart-image-box">

                                <img
                                    src={`http://localhost:5000/uploads/${item.image}`}
                                    className="cart-image"
                                    alt={item.productName}
                                />

                            </div>

                            <div className="cart-content">

                                <h3 className="fw-bold">
                                    {item.productName}
                                </h3>

                                <p className="text-muted">
                                    {item.quantity}
                                </p>

                                <h4 className="text-success">
                                    ₹ {item.price}
                                </h4>

                                <div className="quantity-section">

                                    <button
                                        className="qty-btn"
                                        onClick={() => {
                                            quantities1(item.id)
                                        }}
                                    >
                                        −
                                    </button>

                                    <span className="qty-number">
                                        {item.quantity}
                                    </span>

                                    <button
                                        className="qty-btn"
                                        onClick={() => quantities(item.id)}
                                    >
                                        +
                                    </button>

                                </div>

                                <button
                                    className="btn btn-danger mt-3"
                                    onClick={() => {
                                        deleteProduct(item.id)
                                    }}
                                >

                                    Remove Item

                                </button>

                            </div>

                        </div>

                    </div>

                ))}

            </div>

            <div className="checkout-card">

                <h3 className="fw-bold mb-4">
                    🧾 Bill Summary
                </h3>

                <div className="bill-row">
                    <span>Subtotal</span>
                    <span>{`₹ ${bill}`}</span>
                </div>

                <div className="bill-row">
                    <span>Delivery Charges</span>
                    <span>₹ 20</span>
                </div>

                <div className="bill-row">
                    <span>Discount</span>
                    <span className="text-success">
                        - ₹ 0
                    </span>
                </div>

                <hr />

                <div className="bill-row total-row">

                    <span>Total Amount</span>

                    <span>
                        {`₹ ${totalBillone}`}
                    </span>

                </div>

                <button
                    className="checkout-btn mt-4"
                    onClick={() => {
                        navigate1("/checkout")
                    }}
                >

                    Proceed To Checkout

                </button>

            </div>

        </div>

    )

}

export default Cart;

