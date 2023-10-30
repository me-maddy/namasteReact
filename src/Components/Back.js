import { useNavigate } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(-1);
  };
  return (
    <div className="w-11/12 h-10 mb-4 mt-4 mx-auto" onClick={handleOnClick}>
      <div className="px-5 py-3 cursor-pointer text-2xl">⬅️</div>
    </div>
  );
};

export default Back;
