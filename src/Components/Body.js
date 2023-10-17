import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RestaurantCart from "./Cart";
import Shimmer from "./Shimmer";
import useBody from "../utilities/useBody";
import useStatus from "../utilities/useStatus";

const Body = () => {
  const [value, setValue] = useBody();
  const status = useStatus();
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

  const showAllRestaurant = () => {
    setValue((preValue) => ({
      ...preValue,
      data: value.savedData,
      found: false,
    }));
  };

  if (!status) {
    return (
      <div className="min-h-screen w-full text-center flex flex-col justify-center items-center">
        <h1 className="text-2xl">Looks like you are offline!</h1>
        <h1 className="text-2xl">Check your internet connection🛜</h1>
      </div>
    );
  }
  return (
    <div className="container w-full mt-20 flex gap-y-10 flex-col mb-8 items-center">
      <div className="w-full">
        <div className="border-[1px] border-gray-300 py-2 pl-2 pr-1 rounded-md flex items-center w-fit mx-auto shadow">
          <input
            type="search"
            value={value.input}
            placeholder="Search"
            onChange={(e) =>
              setValue((preValue) => ({ ...preValue, input: e.target.value }))
            }
            className="pl-1 outline-none text-slate-600 w-64 border-none mr-1 text-lg sm:max-w-2xl sm:min-w-max sm:w-96 caret-gray-500"
          />
          <SearchOutlinedIcon
            className="cursor-pointer text-gray-500"
            onClick={searchList}
          />
        </div>
      </div>

      <div className="flex justify-between w-full px-8">
        <button
          className="bg-green-600 rounded-md text-white text-xl px-2.5 py-1.5 hover:opacity-60 transition-opacity ease-in duration-300"
          onClick={showAllRestaurant}
        >
          All Restaurants
        </button>
        <button
          className="bg-red-600 rounded-md text-white text-xl px-2.5 py-1.5 hover:opacity-60 transition-opacity ease-in duration-300"
          onClick={filterTopRated}
        >
          Top Rated
        </button>
      </div>

      {value?.data?.length < 1 ? (
        value.loading ? (
          <Shimmer />
        ) : (
          <div className="text-2xl">
            <p>
              {value.preVal.toUpperCase()} has not found!{" "}
              <span className="text-red-600">Search Again</span>
            </p>
          </div>
        )
      ) : (
        <div className="flex gap-x-9 px-12 gap-y-10 flex-wrap mx-auto w-10/12">
          {value?.data?.map((item) => {
            return <RestaurantCart key={item.info.id} info={item.info} />;
          })}
        </div>
      )}
    </div>
  );
};
export default Body;
