import { IMG_CDN_URL } from "../utils/constant";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    avgRating,
    sla,
    cloudinaryImageId,
    cuisines,
    areaName,
    costForTwo,
  } = resData?.info;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-lg duration-200">
      <img
        src={`${IMG_CDN_URL}${cloudinaryImageId}`}
        alt={name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">{name}</h3>
        <p className="text-sm text-gray-500 mb-1 line-clamp-1">{cuisines?.join(", ")}</p>
        <p className="text-sm text-gray-600">
          ⭐ <span className="font-medium text-green-600">{avgRating}</span> · {sla?.slaString} · {areaName}
        </p>
        <p className="text-sm text-gray-700 mt-1">{costForTwo}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
