import RestaurantCart from "./Cart";

const Restaurants = ({ list }) => {
  return (
    <div className="bottom">
      {list.map((item) => {
        return <RestaurantCart key={item.info.id} info={item.info} />;
      })}
    </div>
  );
};

export default Restaurants;
