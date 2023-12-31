import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

const Footer = () => {
  return (
    <footer className="flex px-6 lg:justify-around md:gap-x-10 gap-y-6 md:gap-y-0 flex-col md:flex-row md:px-6 lg:px-36 py-6 md:py-8 items-start bg-slate-800 text-gray-400 text-base sm:text-lg lg:text-xl pb-10">
      <div className="flex flex-col gap-y-2 md:gap-y-5 lg:mr-6">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-white">
          FOOD KHAO
        </h1>
        <div className="flex items-start gap-x-1.5">
          <CopyrightOutlinedIcon className="text-base md:text-xl mt-[2px]" />{" "}
          <p className="w-full md:w-3/5">2023 Steoc Technologies Pvt. Lmt</p>
        </div>
      </div>
      <div className="line flex flex-col gap-y-2 md:gap-y-5">
        <h1 className="text-white text-lg md:text-xl lg:text-2xl">Company</h1>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          About
        </p>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          Careers
        </p>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          Team
        </p>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          Services
        </p>
      </div>
      <div className="flex flex-col gap-y-5 md:gap-y-10">
        <div className="flex flex-col gap-y-2 md:gap-y-5">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl">
            Contact us
          </h1>
          <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
            Help & Support
          </p>
          <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
            Partner with us
          </p>
          <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
            Ride with us
          </p>
        </div>
        <div className="flex flex-col gap-y-2 md:gap-y-5">
          <h1 className="text-white text-lg md:text-xl lg:text-2xl">Legal</h1>
          <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
            Terms & Conditions
          </p>
          <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
            Cookie Policy
          </p>
          <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
            Privacy Policy
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 md:gap-y-5">
        <h1 className="text-white text-lg md:text-xl lg:text-2xl">
          We Deliver To
        </h1>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          Hyderabad
        </p>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          Pune
        </p>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          Chennai
        </p>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          Mumbai
        </p>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          Delhi
        </p>
        <p className="cursor-pointer md:hover:opacity-60 transition-opacity duration-200 ease-in">
          Agra
        </p>
      </div>
    </footer>
  );
};

export default Footer;
