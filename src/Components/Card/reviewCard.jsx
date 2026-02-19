"use client";

import { useState } from "react";

const ReviewCard = ({ review }) => {
  const [likes, setLikes] = useState(review.likes?.length || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const formattedDate = new Date(review.date).toLocaleDateString();

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 hover:shadow-lg transition">
      
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={review.photo}
          alt={review.user}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-gray-800">
            {review.user}
          </h3>
          <p className="text-sm text-gray-500">
            {review.email}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="text-amber-400 text-lg">★</span>
        ))}
      </div>

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed">
        {review.review}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t">
        <span className="text-sm text-gray-400">
          {formattedDate}
        </span>

        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${
            liked
              ? "bg-amber-500 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          ❤️ {likes}
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
