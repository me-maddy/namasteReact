import { useEffect, useState } from "react";
import { Menu_API } from "./constant";

const useRestaurant = (id) => {
  const [data, setData] = useState({
    menu: [],
    preMenu: [],
    mainData: {},
  });

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const response = await fetch(Menu_API + id);
    const data = await response.json();
    const info = data?.data?.cards[0]?.card?.card?.info;

    for (let element of data?.data?.cards) {
      if (element?.groupedCard) {
        const menu = element?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (item) =>
            item?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
            item?.card?.card?.["@type"] ===
              "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        );
        const mainData = {
          name: info?.name,
          areaName: info?.areaName,
          avgRating: info?.avgRating,
          avgRatingString: info?.avgRatingString,
          city: info?.city,
          costMessage: info?.costForTwoMessage,
          cuisines: info?.cuisines,
          totalRating: info?.totalRatingsString,
          time: info?.sla?.slaString,
          distance: info?.sla?.lastMileTravelString,
          parentImageId: info?.cloudinaryImageId,
        };
        setData((preValue) => ({
          ...preValue,
          menu: menu,
          preMenu: menu,
          mainData: mainData,
        }));
        break;
      }
    }
  };
  return data;
};

export default useRestaurant;
