import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Restaurants from "./Restaurants";
import { useState } from "react";
import { data } from "../utilities/mockdata";

const Body = () => {
  const [value, setValue] = useState({
    data: data,
    input: "",
    loading: false,
    preVal: "",
  });
  const searchList = () => {
    const newData = data.filter((item) =>
      item.info.name.toLowerCase().includes(value.input.toLowerCase())
    );

    setValue((preValue) => ({
      ...preValue,
      preVal: value.input,
      data: newData,
      loading: newData.length < 1 ? true : false,
      input: "",
    }));
  };

  const filterTopRated = () => {
    const filteredData = data.filter((item) => item.info.avgRating > 4);
    setValue((preValue) => ({
      ...preValue,
      data: filteredData,
      loading: false,
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
              data: data,
              loading: false,
            }))
          }
        >
          All Restaurants
        </button>
        <button className="filter" onClick={filterTopRated}>
          Top Rated Restaurants
        </button>
      </div>
      {value.loading ? (
        <div className="invalid-data">
          <p>
            {value.preVal.toUpperCase()} has not found!{" "}
            <span>Search Again</span>
          </p>
        </div>
      ) : (
        <Restaurants list={value.data} />
      )}
    </div>
  );
};
export default Body;
