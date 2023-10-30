import { useDispatch } from "react-redux";
import { addItem } from "../../utilities/cartSlice";

const Item = ({ properties, hide, parentImageId }) => {
  const dispatch = useDispatch();
  const { name, description, price, isVeg, imageId, defaultPrice } = properties;

  const handleOnClick = () => {
    properties.count = 1;
    properties.parentImageId = parentImageId;
    dispatch(addItem(properties));
  };
  return (
    <div className="">
      <div className="top flex justify-between gap-x-5 w-full pb-5 mb-8 mt-2">
        <div className="text-gray-700 font-medium text-base w-10/12">
          <p
            className={`w-5 h-5 relative before:content-[''] before:w-2.5 before:h-2.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 ${
              isVeg
                ? "border-2 border-green-600 border-solid before:bg-green-600"
                : "border-2 border-red-600 border-solid before:bg-red-600"
            }`}
          ></p>
          <h3 className="text-slate-900 text-lg font-medium mt-1.5">{name}</h3>
          <h6 className=" mb-4">&#8377;{price / 100 || defaultPrice / 100}</h6>
          <p className="w-full text-gray-500 text-sm">{description}</p>
        </div>

        <div className="relative h-32 w-40">
          {imageId && (
            <div className="">
              <img
                className="object-cover cursor-pointer rounded-lg h-32 w-40"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                alt="Item"
              />
            </div>
          )}
          {
            <div
              className="bg-white text-green-600 font-semibold px-6 py-2 cursor-pointer text-lg w-fit rounded-md absolute bottom-0 left-1/2 transition-shadow duration-200 ease-in -translate-x-1/2 translate-y-1/4 shadow-xl hover:shadow-2xl border border-solid border-gray-100"
              onClick={handleOnClick}
            >
              ADD
            </div>
          }
        </div>
      </div>
      <div
        className={hide ? "hidden" : "mt-9 h-[0.5px] w-full bg-gray-300"}
      ></div>
    </div>
  );
};

export default Item;
