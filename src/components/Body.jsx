import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [showingTopRated, setShowingTopRated] = useState(false); // ⭐ Toggle State

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // 🔍 Live search effect
  useEffect(() => {
    const filtered = allRestaurants.filter((res) =>
      res?.info?.name.toLowerCase().includes(searchText.toLowerCase()) ||
      res?.info?.cuisines?.join(',').toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filtered);
    setShowingTopRated(false); // reset TopRated when search is applied
  }, [searchText, allRestaurants]);

  if (isLoading) {
    return <ShimmerUI />;
  }

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      {/* 🔍 Search + 🔥 Filter */}
      <div className="mb-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
        <div className="flex w-full sm:w-auto flex-1 gap-2">
          <input
            type="text"
            placeholder="Search restaurants or dishes..."
            className="flex-grow p-3 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <button
          onClick={() =>
            !showingTopRated
              ? (setFilteredRestaurants(
                  allRestaurants.filter((res) => res?.info?.avgRating > 4.5)
                ),
                setShowingTopRated(true))
              : (setFilteredRestaurants(allRestaurants), setShowingTopRated(false))
          }
          className="bg-orange-100 hover:bg-orange-200 text-orange-700 px-4 py-2 rounded-lg border border-orange-300 shadow-sm transition-all duration-150"
        >
          {showingTopRated ? "↩️ Show All" : "🔥 Top Rated"}
        </button>
      </div>

      {/* ❗ No Results */}
      {filteredRestaurants.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-10">
          😕 No restaurants found for "{searchText}"
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
