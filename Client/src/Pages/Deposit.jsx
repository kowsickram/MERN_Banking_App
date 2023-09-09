import { useState, useContext } from "react";
import UserContext from "./context";

export default function Deposit() {
  const ctx = useContext(UserContext);
  const [deposit, setDeposit] = useState("");
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  const [show, setShow] = useState(true);
  var message = `Account Balance $ ${availablebal}`;
  // form validation
  function validate(field) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (Number(field) <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    return true;
  }

  function handleCreate() {
    if (!validate(deposit)) return;
    var Money = balAnce + Number(deposit);
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;
    setShow(false);
    alert("Successfully Deposited ₹" + deposit);
    setDeposit("");
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-white">Deposit</h1>
      <div className="p-4">
        <input
          className="w-full px-4 py-2  text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-cyan-600"
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
  );
}
