import React from 'react';

const ReviewCardSkeltion = () => {
    return (
         <div className="bg-white rounded-2xl shadow-md p-6 space-y-4 animate-pulse">
      
      {/* User Info */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-gray-200 rounded-full"></div>
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="flex gap-2">
        <div className="h-5 w-20 bg-gray-200 rounded"></div>
      </div>

      {/* Review Text */}
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-4/6"></div>
      </div>

      {/* Footer */}
      <div className="flex justify-between pt-3">
        <div className="h-4 w-24 bg-gray-200 rounded"></div>
        <div className="h-8 w-16 bg-gray-200 rounded-xl"></div>
      </div>
    </div>
    );
};

export default ReviewCardSkeltion;