import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="line copy">
        <h1>FOOD KHAO</h1>
        <div className="copy-line">
          <CopyrightOutlinedIcon className="icon" />{" "}
          <p>2023 Steoc Technologies Pvt. Lmt</p>
        </div>
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

export default Footer;
