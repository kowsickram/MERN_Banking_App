// import "./Pages/pagestyle.css";
import "./App.css"
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import UserContext from "./Pages/context";
import Account from "./Pages/Account";
import Deposit from "./Pages/Deposit";
import Home from "./Pages/Home";
import Withdraw from "./Pages/Withdraw";
import Navebar from "./Pages/Navbar";
import Alldata from "./Pages/Alldata";
import Signup from "./Pages/Signup";


import CustomerCare from "./Pages/Customercare";

function App() {
  return (
    <HashRouter>
      <Navebar />
      

      <UserContext.Provider
        value={{
          users: [
            {
              username: "Kowsick Ram",
              email: "kowsick@gmail.com",
              balance: 0
            }
          ]
        }}
      >
    
        <div className="container" style={{ padding: "10px" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" element={<Home />} />
             <Route path="/Signup" exact element={<Signup />} /> 
            <Route path="/Account" element={<Account />} />
            <Route path="/Deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/alldata" element={<Alldata />} />
            <Route path="/customercare" element={<CustomerCare />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
