import { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
import Header from './myComponent/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './myComponent/Footer'
import HeroSection from './myComponent/HeroSection'

import Farmer from './myComponent/Farmer'
import "./myComponent/myStyle/App.css"
import Farmerinfo from './myComponent/Farmerinfo'
import FarmerRegister from './myComponent/FarmerRegister'
import FarmerLogin from './myComponent/FarmerLogin'
import FarmerProfile from './myComponent/farmerProfile'
import AddProduct from './myComponent/AddProduct'
import ProductDetails from './myComponent/ProductDetails'
import Cart from './myComponent/Cart'
import Checkout from './myComponent/CheckOut'
import FarmerInfo from './myComponent/Farmerinfo'
import axios from 'axios'
import OrderSuccess from './myComponent/OrderSuccess'




function App() {
   const [count, setCount] = useState(0);
   const [bill, setBill] = useState(0);
   const [totalBill, setTotalBill] = useState(0);
   useEffect(() => {

      const clearCart = () => {

         axios.delete("http://localhost:5000/cart/clear/1")
            .catch(err => console.log(err));

      };

      window.addEventListener("beforeunload", clearCart);

      return () => {
         window.removeEventListener(
            "beforeunload",
            clearCart
         );
      };

   }, []);



   return (



      <BrowserRouter>

         <Header count={count} />

         <Routes>

            <Route path='/' element={<HeroSection />} />
            <Route path='/farmer' element={<Farmer count={count} setCount={setCount} bill={bill} setBill={setBill} />} />
            <Route path='farmerinfo' element={<FarmerInfo />} />

            <Route path='/farmer/farmerRegister' element={<FarmerRegister />} />
            <Route path='/farmer/farmerLogin' element={<FarmerLogin />} />
            <Route path='/farmer/profile' element={<FarmerProfile />} />
            <Route path='/profile/addProduct' element={<AddProduct />} />
            <Route path='/product/:id' element={<ProductDetails count={count} setCount={setCount} bill={bill} setBill={setBill} />} />
            <Route path='/cart' element={<Cart count={count} setCount={setCount} bill={bill} setBill={setBill} totalBill={totalBill} setTotalBill={setTotalBill} />} />
            <Route path='/checkout' element={<Checkout totalBill={totalBill} setTotalBill={setTotalBill} />} />
            <Route path="/order-success" element={<OrderSuccess />} />
         </Routes>


         <Footer />


      </BrowserRouter>






   )

}

export default App
