import ShimmerCard from "./ShimmerCard";

const ShimmerUI = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 max-w-screen-lg mx-auto">
      {Array(6).fill("").map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerUI;
