import UserContext from "./context";
import { useContext } from "react";
import { Card } from "react-bootstrap";
import "./pagestyle.css";

export default function AllData() {
  const alldata = useContext(UserContext);

  function renderTableHeader() {
    let header = Object.keys(alldata.users[0]);

    return header.map((value, index) => {
      return <th key={index}>{value}</th>;
    });
  }

  function renderTableData() {
    return alldata.users.map((user, index) => {
      const { username, email, balance } = user; //destructuring
      return (
        <tr key={index}>
          <td>{username}</td>
          <td>{email}</td>
          <td>{balance}</td>
        </tr>
      );
    });
  }

  return (
    <div className="bg-transparent py-4 px-2 md:px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-x-auto">
          <div className="bg-dark text-white py-2 px-4">
            Account History
          </div>
          <div className="table-responsive">
            <table className="w-full table-auto">
              <thead className="bg-gray-200">
                <tr>{renderTableHeader()}</tr>
              </thead>
              <tbody>{renderTableData()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
