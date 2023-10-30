const Contact = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-[url('https://i.pinimg.com/564x/1d/e5/a0/1de5a0da26352b3b15a8f433ddac32f1.jpg')] relative w-full h-80 bg-no-repeat bg-center bg-cover after:content-[''] after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-stone-800 after:opacity-40 mb-14 flex items-center justify-center">
        <h1 className="text-white text-[52px] relative z-10 font-bold">
          We would love to hear from you!
        </h1>
      </div>
      <div className="w-8/12 mx-auto mb-10">
        <div className="w-9/12 mx-auto">
          <form className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder="How can I help you?"
              className="border outline-none border-gray-300 rounded-md w-full px-3.5 text-xl py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="border outline-none border-gray-300 rounded-md w-full px-3.5 text-xl py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500"
            />
            <input
              type="text"
              placeholder="Email"
              className="border outline-none border-gray-300 rounded-md w-full px-3.5 text-xl py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500"
            />
            <input
              type="text"
              placeholder="Mobile Number"
              className="border outline-none border-gray-300 rounded-md w-full px-3.5 text-xl py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500"
            />
            <textarea
              placeholder="Type Text"
              className="border outline-none border-gray-300 rounded-md w-full px-3.5 text-xl py-2 placeholder:text-gray-300 placeholder:font-normal text-slate-500 h-52"
            ></textarea>
            <button className="border-none outline-none rounded-md w-fit px-2.5 py-2 bg-green-500 text-lg text-white hover:shadow-lg transition-shadow duration-150 ease-in">
              Submit feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
