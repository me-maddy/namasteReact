import { useState } from "react";

const categoryItems = (Items) => {
  return (props) => {
    const { title, categories, hide, parentImageId } = props;
    const [showIndex, setShowIndex] = useState(null);
    return (
      <div className="w-full">
        <h2 className="text-slate-800 max-[370px]:text-base text-lg md:text-2xl font-semibold px-2.5 pb-4 mb-2">
          {title}
        </h2>
        {categories.map((category, index) => (
          <Items
            key={category?.title}
            title={category?.title}
            itemCards={category?.itemCards}
            flag={true}
            hide={index === categories.length - 1 ? true : false}
            showItems={index === showIndex ? true : false}
            setShowIndex={(val) =>
              val ? setShowIndex(index) : setShowIndex(null)
            }
            parentImageId={parentImageId}
          />
        ))}
        <hr
          className={
            hide ? "hidden" : "my-5 max-[370px]:my-3 border-y-8 bg-gray-200"
          }
        />
      </div>
    );
  };
};

export default categoryItems;
