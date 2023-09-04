import "./pagestyle.css";

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

  function handlewithdraw() {
    if (!validate(withdraw)) return;
    var Money = balAnce - withdraw;
    setAvailableBal(Money);
    ctx.users[leng - 1].balance = Money;

    alert("Successfully Withdraw ₹" + withdraw);
    setWithdraw("");
  }

  return (
    <div className="withdraw">
      <h1>Withdraw</h1>

      <center>
        <br />
        <input
          type="number"
          value={withdraw}
          placeholder="Enter the amount to be Withdrawn"
          onChange={(e) => setWithdraw(Number(e.target.value))}
        ></input>
        <button onClick={handlewithdraw}>Withdraw</button>
        <div className="balance">
          <b>{message}</b>
        </div>
      </center>
    </div>
  );
}
