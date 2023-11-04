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
      <div className="top flex max-[460px]:gap-y-5 max-[460px]:flex-col-reverse justify-between gap-x-7 md:gap-x-5 w-full pb-5 mb-1 md:mb-8 mt-2 max-[460px]:items-center max-[460px]:w-60 max-[460px]:mx-auto max-[460px]:py-5 max-[460px]:rounded-md max-[460px]:bg-white max-[460px]:shadow-2xl max-[460px]:border-t max-[460px]:border-gray-100">
        <div className="text-gray-700 font-medium text-[13px] md:text-base w-10/12 max-[460px]:px-1 max-[460px]:w-52">
          <p
            className={`md:w-5 w-4 h-4 md:h-5 relative before:content-[''] before:w-2 before:h-2 md:before:w-2.5 md:before:h-2.5 before:rounded-full before:absolute before:top-1/2 before:left-1/2 before:-translate-y-1/2 before:-translate-x-1/2 ${
              isVeg
                ? "border-2 border-green-600 border-solid before:bg-green-600"
                : "border-2 border-red-600 border-solid before:bg-red-600"
            }`}
          ></p>
          <h3 className="text-slate-900 text-[15px] md:text-lg font-medium mt-1.5">
            {name}
          </h3>
          <h6 className="mb-4 max-[460px]:mb-1.5">
            &#8377;{price / 100 || defaultPrice / 100}
          </h6>
          <p className="w-full text-gray-500 text-xs md:text-sm">
            {description}
          </p>
        </div>

        <div className="relative h-32 max-[460px]:h-40 w-40 max-[460px]:w-52">
          {imageId && (
            <div className="">
              <img
                className="object-cover cursor-pointer rounded-lg h-32 max-[460px]:h-40 w-40 max-[460px]:w-52"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`}
                alt="Item"
              />
            </div>
          )}
          {
            <div
              className="bg-white text-green-600 font-semibold px-6 py-2 cursor-pointer text-sm md:text-lg w-fit rounded-md absolute bottom-0 left-1/2 transition-shadow duration-200 ease-in -translate-x-1/2 translate-y-1/4 shadow-xl hover:shadow-2xl border border-solid border-gray-100 max-[460px]:text-base"
              onClick={handleOnClick}
            >
              ADD
            </div>
          }
        </div>
      </div>
      <div
        className={
          hide
            ? " max-[460px]:block max-[460px]:h-0 max-[460px]:mb-8 hidden"
            : "max-[460px]:mt-2 mt-9 max-[460px]:h-0 h-[0.5px] w-full bg-gray-300"
        }
      ></div>
    </div>
  );
};

export default Item;
