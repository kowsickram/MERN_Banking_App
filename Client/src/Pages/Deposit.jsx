import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

export default function Deposit() {
  const [deposit, setDeposit] = useState("");
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

  // form validation
  function validate(field) {
    if (isNaN(field)) {
      toast.error("Enter a Valid Number");
      return false;
    }
    if (Number(field) <= 0) {
      toast.error("Enter a Valid Number");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit)) return;
    const newBalance = availableBalance + Number(deposit);
    setAvailableBalance(newBalance);
    toast.success("Successfully Deposited ₹" + deposit);
    setDeposit("");

    // Retrieve the email from localStorage
    const storedUser = JSON.parse(sessionStorage.getItem("user"));
    const userEmail = storedUser ? storedUser.email : "";

    // Make an HTTP POST request to update the balance in the database
    axios.post('http://localhost:4000/api/updatebalance', {
      email: userEmail,
      balance: newBalance,
    })
    .then((response) => {
      console.log('Balance updated successfully in the database');
    })
    .catch((error) => {
      console.error('Error updating balance in the database:', error);
    });
  }

  const message = `Account Balance $ ${availableBalance}`;

  return (
    <>
      <ToastContainer position="bottom-right" theme="dark" draggable autoClose={5000} />
      <div className="max-w-md mx-auto p-4 bg-black rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white">Deposit</h1>
        <div className="p-4">
          <input
            className="w-full px-4 py-4 text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-cyan-600"
            type="number"
            value={deposit}
            placeholder="Enter the amount to be Deposited"
            onChange={(e) => setDeposit(Number(e.target.value))}
          ></input>
        </div>
        <div className="p-4 text-center">
          <button
            className="w-full rounded-full bg-cyan-600 text-white py-2 hover:bg-cyan-700 transition-all duration-300"
            onClick={handleCreate}
          >
            Deposit
          </button>
        </div>
        <div className="p-4 text-white text-2xl text-center">
          <b>{message}</b>
        </div>
      </div>
    </>
  );
}
