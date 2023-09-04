import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import { useContext } from "react";
import UserContext from "./context";
import Navebar from "./Navbar";

export default function Account() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  
 
  const ctx = useContext(UserContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  function handleNewAccount(event) {
    event.preventDefault();
    let nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(username)) {
      setNameError("Name can only contain alphabets");
      return;
    } else {
      setNameError("");
    }

    // Validate email
    let emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    // Validate password
    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      return;
    } else {
      setPasswordError("");
    }


    // Push values to UserContext
    ctx.users.push({ username, email, balance: 0 });
     // Update context with logged-in user's information
    ctx.loggedInUser = { username, email };
    // Submit the form
    setIsLoggedIn(true);
    setIsLoginSuccess(true);
    
  }

  function handleAddAccount() {
    // Reset form values
    setUsername("");
    setEmail("");
    setPassword("");
    setIsLoginSuccess(false);
  }

  const isFormValid = username && email && password;

  return (
    <>
      <div className="Home-page"></div>
      <center>
        {isLoginSuccess ? (
          
          <>
          {/* <Alert severity="success" onClose={handleAddAccount}>
            Logged In Successfully
          </Alert> */}
          <Alert severity="success" color="success">
            Logged In Successfully
          </Alert>
        
           
            {/* <button type="button" onClick={handleAddAccount}>
              Add another account
            </button>
            <br />
            <br /> */}
            <button type="button">
              <a href="#/withdraw">Withdraw</a>
            </button>
            <button type="button">
              <a href="#/deposit/">Deposit</a>
            </button>
          </>
        ) : (
          <form onSubmit={handleNewAccount}>
            
            <h1 className="log-head">Login to Your Account</h1>
            <p className="log-info">Don't have an account yet ? <a href="#/signup/">Sign Up</a></p>
            
            
            
        
            <hr />
            <input
              id="name"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <span style={{ color: "red" }}>{nameError}</span>
            
            <br />
            
            <input
              type="email"
              id="email"
              value={email}
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <span style={{ color: "red" }}>{emailError}</span>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <span style={{ color: "red" }}>{passwordError}</span>
           
            <br />
            <button
              type="submit"
              onClick={handleNewAccount}
              disabled={!isFormValid}
              className="log-btn"
            >
              login
            </button>
            <br />
           
            
          </form>
        )}
      </center>
    </>
  );
}
