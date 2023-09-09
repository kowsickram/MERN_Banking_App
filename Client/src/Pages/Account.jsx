import Alert from "@mui/material/Alert";
import React, { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import UserContext from "./context";
import ProfileCard from "./ProfileCard";

export default function Account() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const ctx = useContext(UserContext);
  
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
    ctx.users.push({ username, email, balance: 0 });
    // Send POST request to create a new user
    axios.post('http://localhost:4000/api/newuser', {
      username: username,
      password: password,
    })
    .then((response) => {
      // Assuming your server returns a success message, you can check it here
      if (response.data && response.data.success) {
        setIsLoginSuccess(true);
        // You can also handle any additional logic here if needed
      } else {
        // Handle unsuccessful response here, such as displaying an error message
      }
      
      // Reset form values
      setUsername('');
      setPassword('');
    })
    .catch((error) => {
      console.error('Error creating user:', error);
      // Handle error here, such as displaying an error message
    });
  }
  const isFormValid = username && email && password;

  return (
    <>
      <div className=" max-w-md mx-auto p-4 Home-page"></div>
      <center>
        {isLoginSuccess ? (
          <>
            <Alert severity="success" color="success">
              Logged In Successfully
            </Alert>

            <button type="button">
              <a href="#/withdraw" className="bg-blue-500 text-white px-4 py-2 rounded">
                Withdraw
              </a>
            </button>
            <button type="button">
              <a href="#/deposit/" className="bg-green-500 text-white px-4 py-2 rounded">
                Deposit
              </a>
            </button>
          </>
        ) : (
          <form onSubmit={handleNewAccount}>
            <h1 className="text-3xl font-bold text-white m-8">BAD BANK</h1>
            
            <p className="log-info">
              Don't have an account yet ? <a href="#/signup/">Sign Up</a>
            </p>

            
            <input
              className="border-bottom text-white border-gray-300 px-4 py-2  placeholder-gray-400"
              id="name"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <span style={{ color: "red" }}>{nameError}</span>

            <br />

            <input
              className="border-bottom text-white border-gray-300 px-4 py-2  placeholder-gray-400"
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
              className="border-bottom text-white border-gray-300 px-4 py-2  placeholder-gray-400"
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
              className="bg-blue-500 text-white text-center px-4 py-2 rounded-lg disabled:bg-blue-499"
            >
              Login
            </button>
            
            <br />
          </form>
        )}
      </center>
    </>
  );
}
