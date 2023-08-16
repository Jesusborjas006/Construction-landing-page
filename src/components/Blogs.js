const Blogs = () => {
  return (
    <section className="max-w-[1600px] mx-auto p-8 sm:p-10 text-center">
      <h2 className="text-3xl mb-4 font-semibold">Latest Blogs</h2>
      <h4 className="text-sm text-gray-500 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt.
      </h4>
      <div className="flex flex-col justify-between md:flex-row gap-8">
        <div className="relative ">
          <div className="absolute text-white z-10 bottom-[45px] w-full space-y-4">
            <h3 className="font-bold text-2xl">Unleash Your Creativity</h3>
            <p className="text-sm text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <img
            className="rounded-2xl h-[450px] object-cover brightness-50"
            src="https://images.pexels.com/photos/8618303/pexels-photo-8618303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="construction"
          />
        </div>
        <div className="relative">
          <div className="absolute text-white object-cover z-10  w-full bottom-[100px] space-y-4">
            <h3 className="font-bold text-2xl">Unleash Your Creativity</h3>
            <p className="text-sm text-white/90">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <button className="text-white/95 border border-white/95 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md py-2 px-6">
              Read More
            </button>
          </div>
          <img
            className="rounded-2xl h-[450px] object-cover w-full brightness-50"
            src="https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="construction"
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
