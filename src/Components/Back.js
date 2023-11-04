import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(-1);
  };
  return (
    <div
      className="w-11/12 h-10 mt-5 md:mb-4 sm:mt-4 mx-auto"
      onClick={handleOnClick}
    >
      <div className="md:px-5 md:py-3 cursor-pointer text-xl md:text-2xl">
        ⬅️
      </div>
    </div>
  );
};

export default Back;
