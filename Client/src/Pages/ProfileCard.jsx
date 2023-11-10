import React from "react";

function ProfileCard() {
  // Retrieve the email from session
  const storedUser = JSON.parse(sessionStorage.getItem("user"));
  const userEmail = storedUser ? storedUser.email : "Login To Continue";

  return (
    <aside>
      <div className="max-w-md mx-30 p-1 float-right">
        <div className="bg-black p-4 rounded-lg shadow-md">
          <div>
            <div className="m-4">
              <span className="block bg-white text-center text-black">User</span>
              <span className="block w-full p-2 text-white bg-gray-800">{userEmail}</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default ProfileCard;
