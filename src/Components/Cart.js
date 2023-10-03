import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import { Cloudinary_URL } from "../utilities/constant";

const RestaurantCart = ({ info }) => {
  const { name, cloudinaryImageId, avgRating, cuisines, deliveryTime } = info;
  const data = cuisines.join(", ");

  return (
    <div className="cart">
      <img
        className="cart-img"
        src={Cloudinary_URL + cloudinaryImageId}
        alt="Food Item"
      />
      <div className="details">
        <h3>{name.length < 19 ? name : name.slice(0, 19) + "..."}</h3>
        <div>
          <h4>
            <StarOutlinedIcon className="icon" /> {avgRating}
          </h4>
          <p>{deliveryTime} mins</p>
        </div>
        <p>{data.length < 48 ? data : data.slice(0, 48) + "..."}</p>
      </div>
    </div>
  );
};

export default RestaurantCart;
