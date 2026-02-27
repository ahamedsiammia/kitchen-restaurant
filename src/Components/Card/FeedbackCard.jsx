"use client";

import { useState } from "react";

export default function FeedbackCard({fd}) {
    const { _id,message,date,onDelete,onUpdate}= fd;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedMessage, setUpdatedMessage] = useState(message);

  const formattedDate = new Date(date).toLocaleString();

  const handleUpdate = () => {
    if (onUpdate) {
      onUpdate(_id, updatedMessage);
    }
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(_id);
    }
  };

  return (
    <div className=" bg-amber-300 shadow-md rounded-2xl p-5 border border-gray-200 hover:shadow-lg transition duration-300">
      <div className="mb-3 text-sm text-gray-500">{formattedDate}</div>

      {isEditing ? (
        <textarea
          value={updatedMessage}
          onChange={(e) => setUpdatedMessage(e.target.value)}
          className="w-full border rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      ) : (
        <p className="text-gray-800 text-lg mb-4">{message}</p>
      )}

      <div className="flex gap-3">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Update
          </button>
        )}

        <button
          onClick={handleDelete}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Delete
        </button>
        
      </div>
    </div>
  );
}