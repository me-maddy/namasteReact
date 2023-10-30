import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Logo_URL } from "../utilities/constant";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const items = useSelector((store) => store.cart.items);
  const numberOfItems = items.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.count;
  }, 0);
  return (
    <>
      <div className="px-4 flex justify-between items-center bg-white fixed top-0 left-0 w-full z-10 drop-shadow-md">
        <div className="">
          <Link to="/" className="cursor-pointer no-underline">
            <img src={Logo_URL} alt="Food Logo" className="w-20" />
          </Link>
        </div>
        <div>
          <ul className="items-center flex gap-x-14">
            <li className="hover:opacity-60 transition-all hover:scale-105 ease-in-out duration-300 hover:border-b-2 border-blue-500 pb-[2px]">
              <Link to="/" className="no-underline text-xl cursor-pointer">
                Home
              </Link>
            </li>
            <li className="hover:opacity-60 transition-all hover:scale-105 ease-in-out duration-300 hover:border-b-2 border-blue-500 pb-[2px]">
              <Link to="/about" className="no-underline text-xl cursor-pointer">
                About
              </Link>
            </li>
            <li className="hover:opacity-60 transition-all hover:scale-105 ease-in-out duration-300 hover:border-b-2 border-blue-500 pb-[2px]">
              <Link
                to="/contact"
                className="no-underline text-xl cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li className="mr-4 relative cursor-pointer hover:drop-shadow-xl transition-all duration-300 ease-in-out">
              <Link to="/cart" className="no-underline cursor-pointer">
                <ShoppingCartOutlinedIcon />
                <h4
                  className="absolute top-0 right-0 bg-red-500 text-white px-[5px] rounded-md -translate-y-2/4 translate-x-2/4"
                  data-testid="cartcounter"
                >
                  {numberOfItems || 0}
                </h4>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full h-20"></div>
    </>
  );
};

export default Header;
