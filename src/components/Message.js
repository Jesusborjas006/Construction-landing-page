const Message = () => {
  return (
    <section className="w-screen xl:max-w-[1600px] xl:mx-auto xl:p-8">
      <div className="relative">
        <div className="absolute text-white">
          <h2 className="text-2xl text-center my-7 sm:mt-12 md:mt-28 lg:mt-[14%] md:text-3xl lg:text-5xl">
            Message From CEO
          </h2>
          <div className="px-7 lg:mt-10">
            <p className="text-xs mb-5 sm:text-base md:text-lg md:w-[80%] lg:w-[55%] mx-auto">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enimad minim veniam."
            </p>
            <p className="text-xs sm:text-base md:text-lg md:w-[80%] lg:w-[55%] mx-auto">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enimad minim veniam, quis nostrud exercitation ullamco
              laborisnisiutaliquip ex ea commodo consequat. Duis aute irure
              dolorin reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nullpariatur.
            </p>
          </div>
        </div>
        <img
          className="max-h-[750px] w-[1600px] object-fill"
          src="https://images.pexels.com/photos/12255/pexels-photo-12255.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="background"
        />
      </div>
    </section>
  );
};

export default Message;
