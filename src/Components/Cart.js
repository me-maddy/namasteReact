import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Cloudinary_URL } from "../utilities/constant";
import { Link } from "react-router-dom";

const RestaurantCart = ({ info }) => {
  const { name, cloudinaryImageId, avgRating, cuisines, sla, id } = info;
  const data = cuisines.join(", ");

  return (
    <Link to={`/restaurant/${id}`} className=" no-underline text-black">
      <div className="w-52 max-h-80 h-72 flex flex-col gap-y-4 cursor-pointer transition-all duration-300 ease-in-out hover:scale-95">
        <img
          className="w-full h-1/2 rounded-md shadow-lg object-cover"
          src={Cloudinary_URL + cloudinaryImageId}
          alt="Food Item"
        />
        <div className="flex flex-col gap-y-2 px-1.5">
          <h3 className="font-semibold text-lg">
            {name.length < 17 ? name : name.slice(0, 17) + "..."}
          </h3>
          <div className="flex justify-between items-center pr-1.5">
            <h4 className="flex items-center pl-1">
              <StarOutlinedIcon className="icon mr-1 text-green-500" />{" "}
              {avgRating}
            </h4>
            <p className="text-gray-400 text-base">{sla.deliveryTime} mins</p>
          </div>
          <p className="text-base text-gray-500">
            {data.length < 48 ? data : data.slice(0, 48) + "..."}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCart;
