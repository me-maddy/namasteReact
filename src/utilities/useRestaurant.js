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
    const menu =
      data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (item) => item?.card?.card?.hasOwnProperty("title")
      );
    const mainData = {
      name: info?.name,
      areaName: info?.areaName,
      avgRating: info?.avgRating,
      city: info?.city,
      costMessage: info?.costForTwoMessage,
      cuisines: info?.cuisines,
      totalRating: info?.totalRatingsString,
      time: info?.sla?.slaString,
      distance: info?.sla?.lastMileTravelString,
    };
    setData((preValue) => ({
      ...preValue,
      menu: menu,
      preMenu: menu,
      mainData: mainData,
    }));
  };
  return data;
};

export default useRestaurant;
