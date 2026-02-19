const Loading = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-pulse">
      
      <div className="h-6 w-32 bg-gray-200 rounded mb-8"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Image Skeleton */}
        <div className="w-full h-[400px] bg-gray-200 rounded-2xl"></div>

        {/* Content Skeleton */}
        <div className="space-y-6">
          <div className="h-10 bg-gray-200 rounded w-3/4"></div>

          <div className="flex gap-4">
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
            <div className="h-6 w-24 bg-gray-200 rounded-full"></div>
          </div>

          <div className="h-8 w-32 bg-gray-200 rounded"></div>

          <div className="flex gap-4 pt-4">
            <div className="h-12 w-40 bg-gray-200 rounded-xl"></div>
            <div className="h-12 w-40 bg-gray-200 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
