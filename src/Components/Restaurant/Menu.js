import { useParams } from "react-router-dom";
import Items from "./Items";
import useRestaurant from "../../utilities/useRestaurant";
import ShimmerUI from "../ShimmerUI";
import { useState } from "react";
import categoryItems from "./CategoryItems";
import Back from "../Back";

const Menu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);
  const data = useRestaurant(resId);
  const CategoryItems = categoryItems(Items);
  return data?.menu?.length <= 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <Back />
      <div className="w-full h-full mb-8 md:mt-6">
        <div className="w-10/12 md:w-9/12 lg:w-8/12 mx-auto">
          <div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col max-[370px]:gap-y-1 gap-y-2.5">
                <h3 className="font-semibold max-[370px]:text-lg text-xl md:text-3xl text-slate-700">
                  {data?.mainData?.name}
                </h3>

                <div className="flex flex-col max-[370px]:text-xs text-sm md:text-base gap-y-0 pl-1.5 text-gray-500 font-medium">
                  <p>{data.mainData.cuisines?.join(", ")}</p>
                  <p>
                    {data?.mainData?.areaName}, {data?.mainData?.distance}
                  </p>
                </div>
              </div>
              <div className="rounded-md border border-gray-200 border-solid py-1.5 px-2.5 shadow-md">
                <h3 className="text-green-600 max-[370px]:text-sm text-base md:text-lg font-bold">
                  {data?.mainData?.avgRating
                    ? `Star ${data?.mainData?.avgRating}`
                    : data?.mainData?.avgRatingString}
                </h3>
                {data?.mainData?.totalRating && (
                  <>
                    <hr className="w-10/12 text-gray-200" />
                    <p className="text-sm md:text-base max-[370px]:text-xs font-semibold text-gray-500">
                      {data?.mainData?.totalRating}
                    </p>
                  </>
                )}
              </div>
            </div>
            <div className="mt-5 max-[370px]:mt-2.5">
              <hr className="border-b-[1px] border-dashed border-gray-300 mb-4 max-[370px]:mb-2 px-1.5" />
              <div className="flex pl-2 text-gray-500 font-medium gap-x-8 max-[370px]:gap-x-4 max-[370px]:text-sm text-base md:text-xl">
                <div className="flex items-center gap-x-1.5">
                  <span>
                    <svg
                      className="RestaurantTimeCost_icon__8UdT4"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <circle
                        r="8.35"
                        transform="matrix(-1 0 0 1 9 9)"
                        stroke="#3E4152"
                        strokeWidth="1.3"
                      ></circle>
                      <path
                        d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                        fill="#3E4152"
                      ></path>
                    </svg>
                  </span>{" "}
                  <span>{data?.mainData?.time}</span>
                </div>
                <div className="flex items-center gap-x-1.5">
                  <span>
                    <svg
                      className="RestaurantTimeCost_icon__8UdT4"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="8.25"
                        stroke="#3E4152"
                        strokeWidth="1.5"
                      ></circle>
                      <path
                        d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                        fill="#3E4152"
                      ></path>
                    </svg>
                  </span>{" "}
                  <span>{data?.mainData?.costMessage}</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-none h-[0.5px] bg-gray-300 mt-6 max-[370px]:mt-3 md:mt-12 max-[370px]:mb-3 mb-5 drop-shadow-sm mx-3.5" />
          {data?.menu?.map((item, index) => {
            return item?.card?.card?.itemCards ? (
              <Items
                key={item?.card?.card?.title}
                title={item?.card?.card?.title}
                itemCards={item?.card?.card?.itemCards}
                flag={false}
                hide={index === data?.menu?.length - 1 ? true : false}
                showItems={index === showIndex ? true : false}
                setShowIndex={(val) =>
                  val ? setShowIndex(index) : setShowIndex(null)
                }
                parentImageId={data?.mainData?.parentImageId}
              />
            ) : (
              <CategoryItems
                key={item?.card?.card?.title}
                title={item?.card?.card?.title}
                categories={item?.card?.card?.categories}
                hide={index === data?.menu?.length - 1 ? true : false}
                parentImageId={data?.mainData?.parentImageId}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
