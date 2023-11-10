import React, { useState } from "react";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Deposit from "./Pages/Deposit";
import Home from "./Pages/Home";
import Withdraw from "./Pages/Withdraw";
import Navebar from "./Pages/Navbar";
import Alldata from "./Pages/Alldata";
import Signup from "./Pages/Signup";
import Footer from "./Pages/Footer";
import CustomerCare from "./Pages/Customercare";
import About from "./Pages/About";


function App() {
  return (
    <HashRouter>
      <Navebar />
        <div className="container" style={{ padding: "10px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Signup" exact element={<Signup />} />
            <Route path="/Login" element={<Login />}/>
            <Route path="/Deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
            <Route path="/customercare" element={<CustomerCare />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
