const Hero = () => {
  return (
    <section className="max-w-[1600px] mx-auto p-8 sm:p-10 lg:mb-32 relative">
      <div className="lg:flex ">
        <div className="text-center lg:text-start">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="text-blue-500">Masters</span> of
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Consistency and
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
            <span className="text-blue-500">Quality</span>.
          </h1>
          <p className="text-gray-500 mb-8 md:text-lg max-w-[350px] mx-auto lg:mx-0 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
          <button className=" text-white w-[150px] text-sm bg-blue-500 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md py-3 px-8 shadow-xl mr-4">
            Explore
          </button>
          <button className="w-[150px] text-sm text-blue-500 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md py-3 px-8 border border-blue-500">
            Contact Us
          </button>
          <div className="flex justify-between mt-14 max-w-[500px] mx-auto">
            <div className="text-start">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                25,356
              </h3>
              <p className="text-gray-500">Projects Done</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                15,200
              </h3>
              <p className="text-gray-500">Buildings Done</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                350+
              </h3>
              <p className="text-gray-500">Total Employees</p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="hidden lg:block absolute top-[-80px] right-6 z-[-10] rounded-bl-[50%] rounded-tr-xl max-h-[750px] lg:w-[450px] xl:w-[750px] 2xl:w-[700px] object-fill"
            src="https://images.unsplash.com/photo-1560026301-88340cf16be7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1588&q=80"
            alt="house"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
