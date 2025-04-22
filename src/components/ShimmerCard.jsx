const ShimmerCard = () => {
    return (
      <div className="bg-gray-200 rounded-xl shadow-md animate-pulse overflow-hidden">
        {/* Image Placeholder */}
        <div className="h-40 bg-gray-300 w-full"></div>
  
        {/* Text Placeholder */}
        <div className="p-4 space-y-3">
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-3 bg-gray-300 rounded w-1/2"></div>
        </div>
      </div>
    );
  };
  
  export default ShimmerCard;
  