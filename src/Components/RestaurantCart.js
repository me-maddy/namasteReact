import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Cloudinary_URL } from "../utilities/constant";
import { Link } from "react-router-dom";

const RestaurantCart = ({ info }) => {
  const { name, cloudinaryImageId, avgRating, cuisines, sla, id } = info;

  return (
    <Link
      to={`/restaurant/${id}`}
      className=" no-underline text-black"
      data-testid="resCard"
    >
      <div className="w-52 max-[524px]:w-60 max-h-80 max-[524px]:h-72 h-72 flex flex-col max-[524px]:gap-y-3 gap-y-4 cursor-pointer transition-all duration-300 ease-in-out sm:hover:scale-95 max-[524px]:bg-white max-[524px]:rounded-md max-[524px]:px-3 max-[524px]:pt-5 max-[524px]:shadow-2xl max-[524px]:border-t max-[524px]:border-gray-100 max-[524px]:border-solid">
        <img
          className="w-full h-1/2 rounded-md shadow-lg object-cover"
          src={Cloudinary_URL + cloudinaryImageId}
          alt="Food Item"
        />
        <div className="flex flex-col gap-y-2 px-1.5 max-[524px]:rounded-md">
          <h3 className="font-semibold max-[524px]:text-base text-lg">
            {name.length < 17 ? name : name.slice(0, 17) + "..."}
          </h3>
          <div className="flex justify-between max-[524px]:gap-y-2 items-center pr-1.5">
            <h4 className="flex items-center pl-1 max-[524px]:text-sm">
              <StarOutlinedIcon className="icon mr-1 text-green-500 max-[524px]:text-sm" />{" "}
              {avgRating}
            </h4>
            <p className="text-gray-400 max-[524px]:text-sm text-base">
              {sla.deliveryTime} mins
            </p>
          </div>
          <p className="text-base max-[524px]:text-sm text-gray-500">
            {cuisines.join(", ").length < 48
              ? cuisines.join(", ")
              : cuisines.join(", ").slice(0, 48) + "..."}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCart;
