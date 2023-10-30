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
    for (let element of data?.data?.cards) {
      if (element?.card?.card?.gridElements?.infoWithStyle?.restaurants) {
        const restaurantList =
          element?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setValue((preValue) => ({
          ...preValue,
          data: restaurantList,
          savedData: restaurantList,
          loading: false,
        }));
        break;
      }
    }
  };

  return [value, setValue];
};

export default useBody;
