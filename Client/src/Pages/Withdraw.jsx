import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

export default function Withdraw() {
  const [withdraw, setWithdraw] = useState("");
  const [availableBalance, setAvailableBalance] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve the user's email from localStorage
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    const userEmail = storedUser ? storedUser.email : "";

    // Make an HTTP GET request to retrieve the balance from the server
    axios
      .get(`http://localhost:4000/api/getbalance?email=${userEmail}`)
      .then((response) => {
        const currentBalance = response.data.balance;
        setAvailableBalance(currentBalance);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error retrieving balance from the database:", error);
        setLoading(false);
      });
  }, []);

  // Form validation
  function validate(field) {
    if (isNaN(field)) {
      toast.error("Invalid Amount");
      return false;
    }
    if (field <= 0) {
      toast.error("Enter Valid Value");
      return false;
    }
    if (field > availableBalance) {
      toast.error("Insufficient Balance");
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    if (!validate(withdraw)) return;

    // Retrieve the user's email from localStorage
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    const userEmail = storedUser ? storedUser.email : "";

    // Calculate the new balance after withdrawal
    const newBalance = availableBalance - withdraw;

    // Make an HTTP PUT request to update the balance in the server's database
    axios
      .post("http://localhost:4000/api/updatebalance", {
        email: userEmail,
        balance: newBalance,
      })
      .then((response) => {
        // Update the balance in your component's state
        setAvailableBalance(newBalance);

        // Show a success message
        toast.success("Successfully Withdraw ₹" + withdraw);
        setWithdraw("");
      })
      .catch((error) => {
        console.error("Error updating balance in the database:", error);
      });
  }

  return (
    <>
      <ToastContainer position="bottom-right" theme="dark" draggable autoClose={5000} />
      <div className="max-w-md mx-auto p-4 bg-black rounded-lg shadow-md">
        <h1 className="text-3xl text-white text-center font-bold">Withdraw</h1>

        <div className="p-4">
          <input
            type="number"
            value={withdraw}
            placeholder="Enter the amount to be Withdrawn"
            onChange={(e) => setWithdraw(Number(e.target.value))}
            className="px-4 py-4 w-full placeholder-gray-400 focus:outline-none focus:border-red-500"
          ></input>
        </div>
        <div className="p-4 text-center">
          <button
            onClick={handleWithdraw}
            className="w-full rounded-full bg-red-500 text-white py-2 hover:bg-red-600 transition-all duration-300"
          >
            Withdraw
          </button>
        </div>
        <div className="p-4 text-white text-2xl text-center">
          <b>Account Balance $ {availableBalance}</b>
        </div>
      </div>
    </>
  );
}
