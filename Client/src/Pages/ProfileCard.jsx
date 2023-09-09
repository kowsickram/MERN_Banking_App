import React, { useState } from "react";

function ProfileCard({ username, email }) {
  const [editedUsername, setEditedUsername] = useState(username);
  const [editedEmail, setEditedEmail] = useState(email);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Update user information here, e.g., make an API request
    // After updating, you can set isEditing to false
    setIsEditing(false);
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="bg-white p-4 rounded-lg shadow-md">
        {isEditing ? (
          <form>
            <div className="mb-4">
              <label htmlFor="editedUsername" className="block text-gray-600">
                Username
              </label>
              <input
                type="text"
                id="editedUsername"
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                value={editedUsername}
                onChange={(e) => setEditedUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="editedEmail" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="editedEmail"
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
                value={editedEmail}
                onChange={(e) => setEditedEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleSave}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <div>
            <div className="mb-4">
              <span className="block text-gray-600">Username: {username}</span>
            </div>
            <div className="mb-4">
              <span className="block text-gray-600">Email: {email}</span>
            </div>
            <button
              type="button"
              onClick={handleEdit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfileCard;
