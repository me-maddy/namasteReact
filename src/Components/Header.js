import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Logo_URL } from "../utilities/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const items = useSelector((store) => store.cart.items);
  const [showMenu, setShowMenu] = useState(false);
  const numberOfItems = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count;
  }, 0);
  const handleOnClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="px-2.5  sm:px-4 flex sm:flex-row flex-col sm:justify-between sm:items-center bg-white fixed top-0 left-0 w-full z-20 drop-shadow-md">
        <div className="flex justify-between items-center pr-2">
          <Link to="/" className="cursor-pointer no-underline">
            <img src={Logo_URL} alt="Food Logo" className="w-16 sm:w-20" />
          </Link>
          <div
            className={`flex sm:hidden flex-col ${
              showMenu ? "relative w-6" : "gap-y-1"
            }`}
            onClick={handleOnClick}
          >
            <span
              className={`w-6 h-[2px] bg-gray-800 transition-transform duration-200 ease-in ${
                showMenu && "absolute rotate-45"
              }`}
            ></span>
            <span
              className={showMenu ? "hidden" : "w-6 h-[2px] bg-gray-800"}
            ></span>
            <span
              className={`w-6 h-[2px] bg-gray-800 transition-transform duration-200 ease-in ${
                showMenu && "absolute -rotate-45"
              }`}
            ></span>
          </div>
        </div>

        <div
          className={`sm:block px-5 ${
            showMenu ? "block sm:pb-0 pb-3" : "hidden"
          } `}
        >
          <ul className="sm:items-center  sm:gap-y-0 gap-y-0.5 flex sm:flex-row flex-col sm:gap-x-14">
            <li className="sm:hover:opacity-60 transition-all sm:hover:scale-105 ease-in-out duration-300 sm:hover:border-b-2 border-blue-500 pb-[2px]">
              <Link
                to="/"
                className="no-underline text-lg sm:text-xl cursor-pointer"
              >
                Home
              </Link>
            </li>
            <li className="sm:hover:opacity-60 transition-all sm:hover:scale-105 ease-in-out duration-300 sm:hover:border-b-2 border-blue-500 pb-[2px]">
              <Link
                to="/about"
                className="no-underline text-lg sm:text-xl cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="sm:hover:opacity-60 transition-all sm:hover:scale-105 ease-in-out duration-300 sm:hover:border-b-2 border-blue-500 pb-[2px]">
              <Link
                to="/contact"
                className="no-underline text-lg sm:text-xl cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li className="mr-4 w-fit relative cursor-pointer hover:drop-shadow-xl transition-all duration-300 ease-in-out sm:mt-0 mt-2.5">
              <Link to="/cart" className="no-underline cursor-pointer">
                <ShoppingCartOutlinedIcon />
                <h4
                  className="absolute top-0 right-0 text-sm  bg-red-500 text-white px-[5px] rounded-md -translate-y-2/4 translate-x-2/4"
                  data-testid="cartcounter"
                >
                  {numberOfItems || 0}
                </h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`sm:h-20 w-full ${showMenu ? "h-48" : "h-16"}`}></div>
    </>
  );
};

export default Header;
