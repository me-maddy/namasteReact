const ShimmerUI = () => {
  return (
    <div className="w-full h-full mb-8 mt-16">
      <div className="w-10/12 sm:w-8/12 mx-auto">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-3">
            <p className="w-24 h-6 bg-gray-100"></p>
            <p className="mt-3 w-14 h-5 bg-gray-100"></p>
            <p className="w-32 h-5 bg-gray-100"></p>
          </div>
          <div className="w-32 rounded-lg h-20 bg-gray-100"></div>
        </div>
        <div className="bottom">
          <div className="my-8 h-4 w-full bg-gray-100"></div>
          <div className="flex flex-col gap-y-8 items-center">
            <div className="w-11/12 h-72 bg-gray-100"></div>
            <div className="w-11/12 h-72 bg-gray-100"></div>
            <div className="w-11/12 h-72 bg-gray-100"></div>
            <div className="w-11/12 h-72 bg-gray-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerUI;
