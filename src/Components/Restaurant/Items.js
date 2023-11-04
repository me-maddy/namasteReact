import Item from "./Item";

const Items = ({
  itemCards,
  hide,
  showItems,
  setShowIndex,
  title,
  flag,
  parentImageId,
}) => {
  return (
    <div className="w-full">
      <div className="w-full">
        <div>
          <button
            className="w-full border-none flex justify-between items-center bg-transparent px-2.5 pr-3.5"
            onClick={() =>
              showItems ? setShowIndex(false) : setShowIndex(true)
            }
          >
            <h2
              className={`text-slate-800
                 ${
                   !flag
                     ? "max-[370px]:text-base text-lg md:text-2xl font-semibold"
                     : "max-[370px]:text-sm text-base md:text-lg font-normal"
                 }
              }`}
            >
              {title} ({itemCards ? itemCards?.length : 3})
            </h2>

            <span
              className={`relative pr-5 after:content-[''] after:absolute after:border-[8px] md:after:border-[10px] after:border-transparent after:border-solid
                ${
                  showItems
                    ? "after:-bottom-1.5 after:border-b-slate-800"
                    : "after:border-t-slate-800 after:-bottom-4"
                }`}
            ></span>
          </button>
          {flag && (
            <div className="w-full px-3 max-[370px]:mt-2 mt-4">
              <hr
                className={`w-11/12 border-none bg-gray-200
                  ${
                    showItems
                      ? "h-[0.5px]  w-2/12 transition-[width] duration-700 ease-in-out delay-75"
                      : ""
                  }`}
              />
            </div>
          )}
          {showItems && (
            <div className=" mt-6 max-[370px]:mt-2.5 flex flex-col max-[370px]:gap-y-4 gap-y-8 pl-3.5">
              {itemCards?.map((item, index) => (
                <Item
                  key={item?.card?.info?.id}
                  properties={item?.card?.info}
                  hide={index === itemCards?.length - 1 ? true : false}
                  parentImageId={parentImageId}
                />
              ))}
            </div>
          )}
        </div>
        {!flag ? (
          <hr
            className={
              hide
                ? "hidden"
                : "my-5 max-[370px]:my-3 border-y-4 md:border-y-8 bg-gray-200"
            }
          />
        ) : (
          <div className={hide ? "hidden" : "mb-4 max-[370px]:2 px-3 w-full"}>
            <hr className="h-[0.5px] border-none bg-gray-200" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;
