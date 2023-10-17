import { useEffect, useState } from "react";
import { Body_Info_URL } from "./constant";

const useBody = () => {
  const [value, setValue] = useState({
    data: [],
    savedData: [],
    input: "",
    preVal: "",
    loading: true,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(Body_Info_URL);
    const data = await response.json();
    const restaurantList =
      data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setValue((preValue) => ({
      ...preValue,
      data: restaurantList,
      savedData: restaurantList,
      loading: false,
    }));
  };

  return [value, setValue];
};

export default useBody;
