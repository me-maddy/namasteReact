import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Restaurants from "./Restaurants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
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
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.1766701&lng=78.00807449999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    const restaurantList =
      data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurantList, data);
    setValue((preValue) => ({
      ...preValue,
      data: restaurantList,
      savedData: restaurantList,
      loading: false,
    }));
  };

  const searchList = () => {
    const newData = value.savedData.filter((item) =>
      item.info.name.toLowerCase().includes(value.input.toLowerCase())
    );

    setValue((preValue) => ({
      ...preValue,
      preVal: value.input,
      data: newData,
      input: "",
    }));
  };

  const filterTopRated = () => {
    const filteredData = value.savedData.filter(
      (item) => item.info.avgRating > 4
    );
    setValue((preValue) => ({
      ...preValue,
      data: filteredData,
    }));
  };
  return (
    <div className="container">
      <div className="top">
        <div className="search-box">
          <input
            type="search"
            value={value.input}
            placeholder="Search"
            onChange={(e) =>
              setValue((preValue) => ({ ...preValue, input: e.target.value }))
            }
          />
          <SearchOutlinedIcon className="icon" onClick={searchList} />
        </div>
      </div>

      <div className="filter-box">
        <button
          className="filter"
          onClick={() =>
            setValue((preValue) => ({
              ...preValue,
              data: value.savedData,
              found: false,
            }))
          }
        >
          All Restaurants
        </button>
        <button className="filter" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      {value?.data?.length < 1 ? (
        value.loading ? (
          <Shimmer />
        ) : (
          <div className="invalid-data">
            <p>
              {value.preVal.toUpperCase()} has not found!{" "}
              <span>Search Again</span>
            </p>
          </div>
        )
      ) : (
        <Restaurants list={value.data} />
      )}
    </div>
  );
};
export default Body;
