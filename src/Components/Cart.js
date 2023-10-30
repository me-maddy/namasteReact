import { useSelector } from "react-redux";
import emptyCart from "../utilities/emptycart.png";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Back from "./Back";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const numberOfItems = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count;
  }, 0);
  console.log(items);

  return (
    <>
      <Back />
      <div className="w-full h-full mb-8">
        <h2
          className={`w-fit text-3xl mx-auto text-slate-800 font-light border-b border-slate-500 
      border-solid ${items.length > 0 ? "mb-6 pb-2" : ""}`}
        >
          {items.length === 0
            ? "Your Cart is Empty"
            : `Cart - (${numberOfItems} items)`}
        </h2>
        {items.length > 0 ? (
          <div className="flex justify-around pt-4">
            <div className="w-7/12 sm:w-6/12 pb-2.5">
              <h3 className="text-2xl text-slate-800 text-center font-normal">
                Your Items
              </h3>
              {items.map((item) => {
                return <CartItem key={item.id} properties={item} />;
              })}
            </div>
            <div className="w-4/12 sm:w-4/12 relative  min-h-[250px] h-fit p-2.5 border border-gray-300 rounded-md">
              <h3 className="text-2xl text-slate-800 text-center font-normal pb-2 border-b border-solid border-gray-100">
                Your Bill
              </h3>
              <div>
                <div className="flex justify-between my-2.5">
                  <h3 className="flex-1 font-medium">Item</h3>
                  <h3 className="flex-1 text-center font-medium">
                    No. of items
                  </h3>
                  <h3 className="flex-1 text-right font-medium">Total</h3>
                </div>
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm mb-2"
                  >
                    <h3 className="flex-1 ">
                      {item.name} - ₹
                      {item.price / 100 || item.defaultPrice / 100}
                    </h3>
                    <h3 className="flex-1 text-center">{item.count}</h3>
                    <h3 className="flex-1 text-right ">
                      ₹
                      {(item.price / 100) * item.count ||
                        (item.defaultPrice / 100) * item.count}
                    </h3>
                  </div>
                ))}
                <div className="h-12 w-full"></div>
                <div className="bg-white text-2xl font-medium cursor-pointer shadow-md text-center w-full h-10 border-t border-solid border-gray-200 rounded-b-md absolute bottom-0 left-0 text-green-500 hover:shadow-lg transition-shadow duration-150 ease-in">
                  PAY
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            <img src={emptyCart} alt="Empty Cart" className="mx-auto" />
            <p>
              Looks like you have not added anything to your cart. Go ahead and
              add something to make me happy
            </p>
            <Link to="/" className="no-underline text-green-500">
              <button className="mt-3 px-4 py-2 bg-white text-green-500 font-medium border border-gray-200 border-solid rounded-md cursor-pointer drop-shadow-md hover:scale-105 transition-all duration-150 ease-in">
                ⬅️ Go Back
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
