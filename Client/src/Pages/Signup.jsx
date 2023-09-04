import React, { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  function handleSignUp(event) {
    event.preventDefault();

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

    // Perform signup logic (e.g., API call, etc.)

    // Set sign-up success
    setIsSignUpSuccess(true);
  }

  const isFormValid = email && password;

  return (
    <center>
      {isSignUpSuccess ? (
        <>
          <p>Sign Up Successful</p>
          <button type="button">
            <a href="#/account/">Go to Login</a>
          </button>
        </>
      ) : (
        <form onSubmit={handleSignUp}>
          <h1>Sign Up for an Account</h1>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <span style={{ color: "red" }}>{emailError}</span>
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
          <span style={{ color: "red" }}>{passwordError}</span>
          <br />
          <button
            type="submit"
            onClick={handleSignUp}
            disabled={!isFormValid}
          >
            Sign Up
          </button>
        </form>
      )}
    </center>
  );
}
