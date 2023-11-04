const About = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-[url('https://i.pinimg.com/564x/57/ca/71/57ca71cd7234c653f643deb0209a6f8d.jpg')] w-full h-screen bg-no-repeat bg-cover bg-center relative after:content-[''] after:absolute after:w-full after:h-screen after:left-0 after:top-0 after:bg-gray-800 after:opacity-60 mb-8 sm:mb-16 flex flex-col justify-end items-center pb-16">
        <h1 className="lg:text-[52px] text-xl sm:text-4xl text-white z-10 relative font-bold mb-2">
          Better food for more people
        </h1>
        <p className="text-white relative tracking-wider pb-0.5 font-light text-sm sm:text-base lg:text-xl z-10 border-b lg:pb-2 border-solid border-white">
          Food Khao, Swadishth Khao
        </p>
      </div>
      <div className="mx-auto w-11/12 sm:w-10/12 lg:w-9/12 h-full flex lg:justify-between gap-x-3 sm:gap-x-5 lg:gap-x-0  lg:items-center mb-6 sm:mb-14 max-[460px]:flex-col">
        <div className="w-6/12 max-[460px]:w-11/12">
          <h2 className="sm:text-4xl text-lg font-semibold">
            About Food Khao!
          </h2>
          <hr className="sm:w-32 w-24 border-green-500 border-b-2 mt-0 sm:mt-1.5 mb-3 sm:mb-5 " />
          <p className="font-light tracking-wide text-sm sm:text-lg mb-2.5">
            Welcome to Food Khao - your ultimate destination for delicious food
            delivered right to your doorstep. We are passionate about great
            food, convenience, and exceptional customer service. Our mission is
            to make every meal a memorable and hassle-free experience for you.
          </p>
          <p className="font-light tracking-wide text-sm sm:text-lg">
            At Food Khao, we believe that everyone should have access to a wide
            variety of culinary delights without the stress of cooking or
            leaving the comfort of your home. Our platform brings together a
            diverse range of local restaurants, chefs, and eateries, allowing
            you to explore an extensive menu of options that cater to all tastes
            and preferences.
          </p>
        </div>
        <div className="lg:w-5/12 ">
          <img
            src="https://i.pinimg.com/564x/9e/5c/55/9e5c552f330c2e8a36d0a46f158072ec.jpg"
            alt="Team"
            className="rounded-lg object-cover h-48 sm:h-64 lg:h-96 lg:mt-0 mt-5"
          />
        </div>
      </div>
      <div className="lg:w-9/12 w-11/12 sm:w-10/12 mx-auto mb-7 sm:mb-14">
        <h2 className="sm:text-4xl text-lg font-semibold">Why choose us?</h2>
        <hr className="sm:w-32 w-24 border-green-500 border-b-2 mt-0 sm:mt-1.5 mb-3 sm:mb-5 " />
        <p className="sm:text-lg text-base mb-2.5 tracking-wide">
          <span className="font-medium text-base sm:text-lg mr-2">
            Variety:
          </span>{" "}
          We understand that every day is a different culinary adventure. That's
          why we offer an extensive menu with options ranging from local
          favorites to international cuisine. Whether you're craving classic
          comfort food, gourmet dishes, or something exotic, we've got you
          covered.
        </p>
        <p className="text-base sm:text-lg mb-2.5 tracking-wide">
          <span className="font-medium text-base sm:text-lg mr-2">
            Convenience:
          </span>{" "}
          Our user-friendly website and mobile app make ordering your favorite
          meals quick and effortless. With a few clicks, you can have your
          desired dishes delivered to your doorstep, saving you time and effort.
        </p>
        <p className="text-base sm:text-lg mb-2.5 tracking-wide">
          <span className="font-medium text-base sm:text-lg mr-2">
            Quality:
          </span>{" "}
          We have strict quality standards and work only with trusted
          restaurants and chefs who prioritize the use of fresh, high-quality
          ingredients. Your satisfaction is our top priority, and we strive to
          ensure that every meal meets the highest culinary standards.
        </p>
        <p className="text-base sm:text-lg mb-2.5 tracking-wide">
          <span className="font-medium text-base sm:text-lg mr-2">
            Timely Delivery:
          </span>{" "}
          We understand the importance of prompt and reliable service. Our
          efficient delivery team works tirelessly to ensure that your food
          arrives hot and fresh, right on time.
        </p>
        <p className="text-base sm:text-lg mb-2.5 tracking-wide">
          <span className="font-medium text-base sm:text-lg mr-2">
            Customization:
          </span>{" "}
          We offer easy customization options, allowing you to modify your
          orders based on your dietary preferences or specific cravings. Whether
          you're a vegetarian, vegan, or have dietary restrictions, we've got
          options for you.
        </p>
        <p className="text-base sm:text-lg mb-2.5 tracking-wide">
          <span className="font-medium text-base sm:text-lg mr-2">
            Exceptional Customer Service:
          </span>{" "}
          Our customer support team is always ready to assist you with any
          questions or concerns. We value your feedback and are committed to
          continuously improving our services based on your suggestions.
        </p>
      </div>
      <div className="mx-auto w-9/12 sm:w-7/12 border-2 border-solid border-gray-200 text-sm sm:text-xl font-normal rounded-lg sm:px-6 px-3 py-2 sm:py-4 mb-9 sm:mb-16 shadow-md">
        <p>
          At Food Khao, we are not just a food delivery service; we are a food
          discovery platform. We're here to bring culinary delights from around
          the world to your doorstep and make your dining experiences memorable,
          one meal at a time.
        </p>
        <p className="mt-1.5 sm:mt-2.5">
          Join us on this culinary journey, and let us be your trusted partner
          in exploring the flavors of your city. Order with us today and
          experience the magic of good food delivered to your door.
        </p>
        <h3 className="sm:mt-8 mt-4 text-lg sm:text-2xl">
          "<span className="text-green-500 font-medium">Food Khao</span> - Where
          Good Food Meets Your Doorstep"
        </h3>
      </div>
    </div>
  );
};

export default About;
