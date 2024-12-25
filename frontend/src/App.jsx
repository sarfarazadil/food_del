import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./pages/PLaceOrder/PlaceOrder";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import Loginpopup from "./components/Loginpopup/Loginpopup";
import MyOrders from "./pages/MyOrders/MyOrders";
const App = () => {
  const [showlogin, setshowlogin] = useState(false);
  return (
    <>
      {showlogin ? <Loginpopup setshowlogin={setshowlogin} /> : <></>}
      <div className="app">
        <Navbar setshowlogin={setshowlogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
