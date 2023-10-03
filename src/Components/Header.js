import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Logo_URL } from "../utilities/constant";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo_URL} alt="Food Logo" />
      </div>
      <div className="navbar">
        <ul className="list-container">
          <li className="list">Home</li>
          <li className="list">About</li>
          <li className="list">Service</li>
          <li className="shop-box">
            <ShoppingCartOutlinedIcon className="icon" />
            <h4 className="shop-counter">4</h4>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
