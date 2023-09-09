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
    <div className="max-w-md mx-auto p-4 flex items-center justify-center">
      {isSignUpSuccess ? (
        <div className="text-center">
          <p className="text-green-500 text-2xl font-bold">Sign Up Successful</p>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            <a href="#/account/">Go to Login</a>
          </button>
        </div>
      ) : (
        <form
          className="bg-grey shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSignUp}
        >
          <h1 className="text-3xl font-bold text-white text-center">BAD BANK</h1>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
            required
            className="mb-4 shadow appearance-none border-bottom  w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
          />
          <span className="text-red-500">{emailError}</span>
          <br />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="text-white mb-4 shadow appearance-none border-bottom  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-400"
          />
          <span className="text-red-500">{passwordError}</span>
          <br />
          <button
            type="submit"
            onClick={handleSignUp}
            disabled={!isFormValid}
            className="bg-blue-500 text-white text-center px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}
