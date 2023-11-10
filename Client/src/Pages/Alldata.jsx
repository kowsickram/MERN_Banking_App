import React, { useEffect, useState } from "react";
import axios from "axios";
import "./pagestyle.css";



const UserData = ({ user, userRole }) => {
  const [showFullBalance, setShowFullBalance] = useState(false);

  const toggleShowBalance = () => {
    setShowFullBalance(!showFullBalance);
  };

  const patternBalance = "****"; // Define your pattern for the balance here

  const { type, username, email, balance } = user;

  const formattedBalance = showFullBalance
    ? balance.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    : patternBalance;

  return (
    <tr>
      <td>{username}</td>
      {userRole === "admin" && <td>{type}</td>}
      <td>{email}</td>
      <td className="balance-cell">
        {formattedBalance}{" "}
        <button onClick={toggleShowBalance}>
          {showFullBalance ? (<i className="bi bi-eye-slash text-black"></i>) : (<i className="bi bi-eye text-black"></i>)}
        </button>
      </td>
    </tr>
  );
};

const AllData = () => {
  const [userData, setUserData] = useState([]);
  const [userRole, setUserRole] = useState("");
  const storedUser = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    if (storedUser) {
      setUserRole(storedUser.type);

      axios
        .get("http://localhost:4000/api/userdata", {
          params: { userEmail: storedUser.email }
        })
        .then((response) => {
          setUserData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    }
  }, [storedUser]);

  function renderTableHeader() {
    return (
      <tr>
        <th>Username</th>
        {userRole === "admin" && <th>Type</th>}
        <th>Email</th>
        <th>Balance</th>
      </tr>
    );
  }

  return (
    <div className="bg-transparent py-4 px-2 md:px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md overflow-x-auto">
          <div className="bg-black text-white py-2 px-4 text-center">Account History</div>
          <div className="bg-slate-800 text-white py-2 px-4 text-center">
            {" "}
            Users : {userData.length}
          </div>
          <div className="table-responsive">
            <table className="w-full table-auto">
              <thead className="bg-violet-950 text-white text-center">
                {renderTableHeader()}
              </thead>
              <tbody className="font-bold">
                {userData.map((user, index) => (
                  <UserData key={index} user={user} userRole={userRole} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllData;
