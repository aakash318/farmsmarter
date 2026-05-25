import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = ({ count, setCount, bill, setBill }) => {

    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {

        axios
            .get(`${import.meta.env.VITE_API_URL}/product/${id}`)
            .then((res) => {

                setProduct(res.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    const addToCart = () => {

        axios.post(
           ` ${import.meta.env.VITE_API_URL}/cart`,
            {
                user_id: 1,
                product_id: product.id,
                quantity: product.quantity,
                description: product.description
            }
        )

            .then(() => {


                setCount(count + 1);
                const netBill = parseInt(product.price);
                setBill(bill + netBill);

            })
            .catch((err) => {

                console.log(err);

            });

    };

    return (

        <div className="container py-5">

            <div className="row">

                <div className="col-md-6">

                    <img
                        src={`${import.meta.env.VITE_API_URL}/uploads/${product.image}`}
                        style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            borderRadius: "20px"
                        }}
                    />

                </div>

                <div className="col-md-6">

                    <h1>
                        {product.productName}
                    </h1>

                    <h3>
                        ₹ {product.price}
                    </h3>

                    <p>
                        {product.description}
                    </p>

                    <button
                        className="btn btn-success"
                        onClick={addToCart}


                    >

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>

    )

}

export default ProductDetails;