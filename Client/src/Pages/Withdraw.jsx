import { useState, useContext } from "react";
import UserContext from "./context";

export default function Withdraw() {
  const ctx = useContext(UserContext);
  const [withdraw, setWithdraw] = useState("");
  var leng = ctx.users.length;
  var balAnce = ctx.users[leng - 1].balance;
  const [availablebal, setAvailableBal] = useState(balAnce);
  var message = `Account Balance $ ${availablebal}`;

  // form validation
  function validate(field) {
    if (isNaN(field)) {
      alert("Please Enter Valid Number");
      return false;
    }
    if (field <= 0) {
      alert(" Please Enter a Value greater than zero");
      return false;
    }
    if (field > balAnce) {
      alert("You don't have enough Balance to Withdraw");
      return false;
    }
    return true;
  }

  function handleWithdraw() {
    if (!validate(withdraw)) return;
    var Money = balAnce - withdraw;
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;

    alert("Successfully Withdraw ₹" + withdraw);
    setWithdraw("");
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-black rounded-lg shadow-md">
      <h1 className="text-3xl text-white text-center font-bold">Withdraw</h1>

      <div className="p-4">
        <input
          type="number"
          value={withdraw}
          placeholder="Enter the amount to be Withdrawn"
          onChange={(e) => setWithdraw(Number(e.target.value))}
          className=" px-4 py-2 w-full  placeholder-gray-400 focus:outline-none focus:border-red-500"
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
        <b>{message}</b>
      </div>
    </div>
  );
}
