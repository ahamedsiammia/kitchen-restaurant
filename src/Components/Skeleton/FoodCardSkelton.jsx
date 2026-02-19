const FoodCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-pulse">
      
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gray-200"></div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-6 bg-gray-200 rounded w-1/3"></div>

        <div className="flex gap-3 pt-2">
          <div className="flex-1 h-10 bg-gray-200 rounded-xl"></div>
          <div className="flex-1 h-10 bg-gray-200 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
