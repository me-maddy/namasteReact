import ReactDOM from "react-dom/client";
import "./index.css";

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
          <li className="list">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
