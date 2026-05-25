import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaRobot, FaMicrophone } from "react-icons/fa";

const ThivaAssistant = () => {

    const [isOpen, setIsOpen] = useState(false);

    const [isListening, setIsListening] = useState(false);

    const [product, setProduct] = useState({

        productName: "",
        price: "",
        quantity: "",
        description: "",
        image: null

    });

    const [logs, setLogs] = useState([]);

    const recognitionRef = useRef(null);




    // THIVA SPEAKS

    const speak = (text) => {

        return new Promise((resolve) => {

            if (!("speechSynthesis" in window)) {

                console.log(
                    "Speech synthesis not supported"
                );

                resolve();
                return;

            }

            window.speechSynthesis.cancel();

            const utter =
                new SpeechSynthesisUtterance(text);

            utter.text = text;

            utter.lang = "en-US";

            utter.rate = 1;

            utter.pitch = 1;

            utter.volume = 1;


            let voices = [];

            const loadVoices = () => {

                voices =
                    window.speechSynthesis.getVoices();

            };

            loadVoices();

            window.speechSynthesis.onvoiceschanged =
                loadVoices;

            utter.onstart = () => {

                console.log(
                    "THIVA speaking..."
                );

            };

            utter.onend = () => {

                resolve();

            };

            utter.onerror = (err) => {

                console.log(
                    "Speech Error:",
                    err
                );

                resolve();

            };

            window.speechSynthesis.speak(
                utter
            );

            addLog(
                "🤖 " + text
            );

        });

    };


    // ADD LOGS

    const addLog = (text) => {

        setLogs(prev => [
            ...prev,
            text
        ]);

    };




    // SPEECH SETUP
    useEffect(() => {

        const SpeechRecognition =
            window.SpeechRecognition ||
            window.webkitSpeechRecognition;

        if (!SpeechRecognition) {

            alert(
                "Speech recognition not supported"
            );

            return;

        }

        const recognition =
            new SpeechRecognition();

        recognition.lang = "en-IN";

        recognition.continuous = false;

        recognition.interimResults = false;

        recognitionRef.current =
            recognition;


        recognition.onresult = (e) => {

            const voice =
                e.results[0][0]
                    .transcript;

            addLog(
                "👨 " + voice
            );

            parseVoice(
                voice.toLowerCase()
            );

        };

        recognition.onend = () => {

            setIsListening(false);

        };


        window.speechSynthesis.onvoiceschanged = () => {

            window.speechSynthesis.getVoices();

        };

    }, []);




    // PARSE VOICE

    const parseVoice = (voice) => {

        const nums =
            voice.match(/\d+/g) || [];


        const quantity =
            nums[0] || "";

        const price =
            nums[1] || "";


        let productName =

            voice
                .replace(/\d+/g, "")
                .replace(
                    /kg|price|rupees|rs/gi,
                    ""
                )
                .trim();



        setProduct(prev => ({

            ...prev,
            productName:
                productName,

            quantity:
                quantity,

            price:
                price

        }));



        speak(

            `I found ${productName},
quantity ${quantity}
kilograms and
price ${price}
rupees.
Please upload image.`

        );

    };





    // START MIC

    const startListening = async () => {

        if (isListening) return;

        setIsListening(true);

        await speak(
            "THIVA activated. Tell me product details."
        );

        recognitionRef.current.start();

    };




    // IMAGE

    const handleImage = (e) => {

        setProduct(prev => ({

            ...prev,
            image:
                e.target.files[0]

        }));


        speak(
            "Image selected successfully. Now click add product"
        );
    };




    // SUBMIT

    const handleSubmit = () => {


        const formData =
            new FormData();

        formData.append(

            "productName",
            product.productName

        );

        formData.append(

            "price",
            product.price

        );

        formData.append(

            "quantity",
            product.quantity

        );

        formData.append(

            "description",
            product.description ||
            "Added through THIVA"

        );

        formData.append(

            "image",
            product.image

        );



        axios.post(

            "http://localhost:5000/addProduct",

            formData,

            {

                headers: {

                    "Content-Type":
                        "multipart/form-data"

                }

            }

        )

            .then(() => {

                speak(
                    "Product added successfully"
                );

                setProduct({

                    productName: "",
                    price: "",
                    quantity: "",
                    description: "",
                    image: null

                });

            })

            .catch(() => {

                speak(
                    "Unable to add product"
                );

            });

    };





    return (

        <>

            {/* FLOATING ICON */}

            <div

                onClick={() => {

                    setIsOpen(!isOpen)

                }}

                style={{

                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#2e7d32",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    cursor: "pointer",
                    color: "white",
                    fontSize: "30px",
                    zIndex: "1000"

                }}

            >

                <FaRobot />

            </div>




            {isOpen && (

                <div

                    style={{

                        position: "fixed",
                        bottom: "120px",
                        right: "30px",
                        width: "350px",
                        background: "white",
                        borderRadius: "25px",
                        padding: "20px",
                        boxShadow:
                            "0 0 20px rgba(0,0,0,.2)",
                        zIndex: "1000"

                    }}

                >

                    <h4>

                        🤖 THIVA Assistant

                    </h4>


                    <div

                        style={{

                            height: "150px",
                            overflowY: "auto",
                            background: "#f5f5f5",
                            padding: "10px",
                            borderRadius: "15px",
                            marginBottom: "20px"

                        }}

                    >

                        {

                            logs.map((log, i) => (

                                <div key={i}>

                                    {log}

                                </div>

                            ))

                        }

                    </div>


                    <button

                        className=
                        "btn btn-success w-100"

                        onClick=
                        {startListening}

                    >

                        <FaMicrophone />

                        {

                            isListening
                                ?
                                " Listening..."
                                :
                                " Speak"

                        }

                    </button>


                    <input

                        type="file"

                        className=
                        "form-control mt-3"

                        onChange=
                        {handleImage}

                    />


                    <button

                        className=
                        "btn btn-primary w-100 mt-3"

                        onClick=
                        {handleSubmit}

                    >

                        Add Product

                    </button>

                </div>

            )}

        </>

    );

};

export default ThivaAssistant;

