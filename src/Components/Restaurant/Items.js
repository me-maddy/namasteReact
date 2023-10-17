import { useState } from "react";
import Item from "./Item";

const Items = ({ info, hide, showItems, setShowIndex }) => {
  const [hidden, setHidden] = useState(false);
  const { itemCards, title } = info;
  return (
    <div className={itemCards ? "feature w-full" : "hidden"}>
      <div className="w-full">
        <div>
          <button
            className="w-full border-none bg-red-500 flex justify-between items-center bg-transparent px-2.5 pr-3.5"
            onClick={() =>
              showItems ? setShowIndex(false) : setShowIndex(true)
            }
          >
            <h2 className="text-2xl text-slate-800 font-semibold">
              {title} ({itemCards?.length})
            </h2>
            <span
              className={`relative pr-5 after:content-[''] after:absolute after:border-[10px] after:border-transparent after:border-solid
                ${
                  hidden
                    ? "after:-bottom-1.5 after:border-b-slate-800"
                    : "after:border-t-slate-800 after:-bottom-4"
                }`}
            ></span>
          </button>
          {showItems && (
            <div className="items mt-6 flex flex-col gap-y-8 pl-3.5">
              {itemCards?.map((item, index) => (
                <Item
                  key={item?.card?.info?.id}
                  properties={item?.card?.info}
                  hide={index === itemCards?.length - 1 ? true : false}
                />
              ))}
            </div>
          )}
        </div>
        <hr className={hide ? "hidden" : "my-5 border-y-8 bg-gray-200"} />
      </div>
    </div>
  );
};

export default Items;
