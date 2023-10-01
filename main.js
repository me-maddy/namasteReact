import ReactDOM from "react-dom/client";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";
import "./index.css";
import { data } from "./data.js";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/564x/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg"
          alt="Food Logo"
        />
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

const RestaurantCart = ({ info }) => {
  const { name, cloudinaryImageId, avgRating, cuisines, deliveryTime } = info;
  const data = cuisines.join(", ");

  return (
    <div className="cart">
      <img
        className="cart-img"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="Food Item"
      />
      <div className="details">
        <h3>{name.length < 19 ? name : name.slice(0, 19) + "..."}</h3>
        <div>
          <h4>
            <StarOutlinedIcon className="icon" /> {avgRating}
          </h4>
          <p>{deliveryTime} mins</p>
        </div>
        <p>{data.length < 48 ? data : data.slice(0, 48) + "..."}</p>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="container">
      <div className="top">
        <div className="search-box">
          <input type="search" />
          <SearchOutlinedIcon className="icon" />
        </div>
      </div>
      <div className="bottom">
        {data.map((item) => {
          return <RestaurantCart key={item.info.id} info={item.info} />;
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="line copy">
        <h1>FOOD KHAO</h1>
        <p className="copy-line">
          <CopyrightOutlinedIcon className="icon" />{" "}
          <p>2023 Steoc Technologies Pvt. Lmt</p>
        </p>
      </div>
      <div className="line">
        <h1>Company</h1>
        <p>About</p>
        <p>Careers</p>
        <p>Team</p>
        <p>Services</p>
      </div>
      <div className="line contact-box">
        <div className="contact">
          <h1>Contact us</h1>
          <p>Help & Support</p>
          <p>Partner with us</p>
          <p>Ride with us</p>
        </div>
        <div className="legal">
          <h1>Legal</h1>
          <p>Terms & Conditions</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div className="line">
        <h1>We Deliver To</h1>
        <p>Hyderabad</p>
        <p>Pune</p>
        <p>Chennai</p>
        <p>Mumbai</p>
        <p>Delhi</p>
        <p>Agra</p>
      </div>
    </footer>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
