# 🌾 Farm2Table

Farm2Table is a smart agriculture and e-commerce platform developed to connect farmers directly with customers. The platform removes unnecessary middlemen and allows customers to purchase fresh products directly from farms.

Created by **Aakash Pathak**

---

## 📌 Project Overview

Farm2Table creates a digital marketplace where:

* Farmers can register and manage products
* Customers can browse farm products
* Users can add products to cart
* Secure online payments can be made
* Orders are confirmed with delivery information
* Voice assistant support helps farmers add products easily

The main goal is to support farmers with better visibility and provide customers with fresh products directly from farms.

---

## 🚀 Features

### 👨‍🌾 Farmer Module

* Farmer Registration
* Farmer Login
* Farmer Profile
* Add Products
* Upload Product Images
* Voice-based Product Addition using THIVA Assistant

### 🛒 Customer Module

* Browse Products
* View Product Details
* Add to Cart
* Update Quantity
* Remove Products
* Checkout Process
* Order Confirmation Page

### 💳 Payment Integration

* Razorpay Payment Gateway
* Order Creation
* Payment Success Handling
* Order Saving

### 🤖 THIVA Voice Assistant

Features:

* Speech Recognition
* Speech Response
* Product Information Extraction
* Voice-based Product Creation

---

## 🛠 Tech Stack

### Frontend

* React.js
* Bootstrap
* CSS
* Axios
* React Router DOM
* React Icons

### Backend

* Node.js
* Express.js

### Database

* MySQL

### APIs & Services

* Razorpay API
* Speech Recognition API
* Speech Synthesis API

---

## 📂 Project Structure

```bash
Farm2Table
│
├── frontend
│   ├── Components
│   ├── CSS
│   ├── Pages
│   └── Assets
│
├── backend
│   ├── Routes
│   ├── Database
│   ├── Uploads
│   └── APIs
│
└── README.md
```

---

## ⚙ Installation

Clone repository:

```bash
git clone <repository-url>
```

Move to frontend:

```bash
cd frontend
npm install
npm run dev
```

Move to backend:

```bash
cd backend
npm install
nodemon server.js
```

---

## Environment Variables

Create `.env` file inside backend:

```env
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=farm2table

RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
```

---

## Future Improvements

* AI-based product recommendation
* Live order tracking
* Farmer analytics dashboard
* Multiple payment options
* Mobile application
* Chat support

---

## Author

**Aakash Pathak**

Btech Student | Full Stack Developer | Farm2Table Creator

---

⭐ If you like this project, support it by giving a star.
