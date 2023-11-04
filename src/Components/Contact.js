const Contact = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-[url('https://i.pinimg.com/564x/1d/e5/a0/1de5a0da26352b3b15a8f433ddac32f1.jpg')] relative w-full sm:h-80 h-44 bg-no-repeat bg-center bg-cover after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-stone-800 after:opacity-40 sm:mb-14 mb-6 flex items-center justify-center">
        <h1 className="text-white sm:text-4xl text-xl lg:text-[52px] max-[460px]:text-center max-[460px]:w-7/12 relative z-10 font-bold">
          We would love to hear from you!
        </h1>
      </div>
      <div className="sm:w-8/12 w-10/12 mx-auto mb-10">
        <div className="w-11/12 mx-auto">
          <form className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="How can I help you?"
              className="border outline-none border-gray-300 rounded-md w-full sm:px-3.5 px-2 text-base sm:text-xl py-1.5 sm:py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="border outline-none border-gray-300 rounded-md w-full sm:px-3.5 px-2 text-base py-1.5 sm:text-xl sm:py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500"
            />
            <input
              type="text"
              placeholder="Email"
              className="border outline-none border-gray-300 rounded-md w-full sm:px-3.5 px-2 text-base py-1.5 sm:text-xl sm:py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="border outline-none border-gray-300 rounded-md w-full sm:px-3.5 px-2 text-base py-1.5 sm:text-xl sm:py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500"
            />
            <textarea
              placeholder="Type Text"
              className="border outline-none border-gray-300 rounded-md w-full sm:px-3.5 px-2 text-base py-1.5 sm:text-xl sm:py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500 h-52"
            ></textarea>
            <button className="border-none outline-none rounded-md w-fit px-2.5 py-2 bg-green-500 text-base sm:text-lg text-white hover:shadow-lg transition-shadow duration-150 ease-in">
              Submit feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
