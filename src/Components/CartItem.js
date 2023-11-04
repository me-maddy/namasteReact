import { useDispatch } from "react-redux";
import { addItem, deleteItem, removeItem } from "../utilities/cartSlice";
import { Cloudinary_URL } from "../utilities/constant";

const CartItem = ({ properties }) => {
  const {
    name,
    price,
    isVeg,
    imageId,
    defaultPrice,
    id,
    count,
    parentImageId,
  } = properties;
  console.log(properties);
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(removeItem(id));
  };
  const handleAddClick = () => {
    dispatch(addItem(properties));
  };
  const handleSubClick = () => {
    dispatch(deleteItem(id));
  };
  return (
    <div
      className="md:mt-7 mt-3  flex max-[460px]:gap-x-1.5 gap-x-6"
      data-testid="cartitem"
    >
      <div className="mt-2 md:mt-3">
        <img
          className="object-cover cursor-pointer rounded-lg max-[460px]:h-28 h-32 max-[460px]:w-32 w-40"
          src={
            imageId ? Cloudinary_URL + imageId : Cloudinary_URL + parentImageId
          }
          alt="Item"
        />
      </div>

      <div className="text-gray-700 font-medium max-[460px]:text-xs text-sm md:text-base w-10/12 p-3">
        <p
          className={`md:w-5 w-4 h-4 md:h-5 relative before:content-[''] md:before:w-2.5 before:w-2 before:h-2 md:before:h-2.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 ${
            isVeg
              ? "border-2 border-green-600 border-solid before:bg-green-600"
              : "border-2 border-red-600 border-solid before:bg-red-600"
          }`}
        ></p>
        <h3 className="text-slate-900 max-[460px]:text-sm text-base md:text-lg font-medium max-[460px]:mt-1 mt-1.5">
          {name}
        </h3>
        <h6 className="mb-1.5 md:mb-2.5">
          &#8377;{price / 100 || defaultPrice / 100}
        </h6>
        <div className="flex max-[460px]:gap-x-3 gap-x-6 items-center mb-4">
          <div className="flex cursor-pointer font-semibold items-center bg-white transition-shadow duration-200 ease-in text-green-500 drop-shadow-md rounded-md md:hover:shadow-xl border border-solid border-gray-100 max-[460px]:h-8 h-10">
            <span
              className="text-lg py-1 md:py-1.5 rounded-md px-2 md:px-3 md:hover:bg-gray-100 md:hover:border-b md:hover:border-solid md:hover:border-green-400 md:hover:border-t transition-all duration-200 ease-in"
              onClick={handleSubClick}
            >
              -
            </span>
            <span className="max-[460px]:px-1 px-2">{count}</span>
            <span
              className="text-lg px-2 md:px-3 py-1 md:py-1.5 md:hover:bg-gray-100 rounded-md md:hover:border-b md:hover:border-solid md:hover:border-green-400 md:hover:border-t transition-all duration-200 ease-in"
              onClick={handleAddClick}
            >
              +
            </span>
          </div>
          <div
            className="bg-white cursor-pointer font-semibold transition-shadow duration-200 ease-in text-green-500 drop-shadow-md px-4 py-1.5 md:py-2 rounded-md md:hover:shadow-xl border border-solid border-gray-100 max-[460px]:h-8 h-10"
            onClick={handleDeleteClick}
          >
            DELETE
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
