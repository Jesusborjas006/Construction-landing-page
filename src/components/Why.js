import num1 from "../construction-images/num1.png";
import num2 from "../construction-images/num2.png";
import num3 from "../construction-images/num3.png";

const Why = () => {
  return (
    <section className="max-w-[1600px] mx-auto p-8 sm:p-10 mb-10">
      <div className="flex justify-between gap-14 mb-6 sm:mb-20">
        <div className="hidden sm:block">
          <p className="text-gray-500 mb-5 md:text-lg max-w-[350px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod.
          </p>
          <button className=" text-white w-[150px] text-sm bg-blue-500 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md py-3 px-8 shadow-xl">
            Explore
          </button>
        </div>
        <div className="mx-auto">
          <h2 className="text-2xl mb-4 md:text-4xl text-center sm:text-start max-w-[400px]">
            Why Choose us for best construction experience
          </h2>
        </div>
      </div>
      <div className="flex items-center justify-center md:space-x-14  mx-auto">
        <img
          className="hidden md:block rounded-tr-[50%] md:w-[45%] "
          src="https://images.unsplash.com/photo-1551711974-faf378be34b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
          alt="construction site"
        />
        <div className="space-y-[10%] lg:space-y-[20%] md:w-[55%] mx-auto ">
          <div className="flex items-end">
            <img
              className="w-[70px] sm:w-[80px] md:w-[90px] mr-7"
              src={num1}
              alt="number"
            />
            <p className="text-gray-500 max-w-[310px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod adipiscing.
            </p>
          </div>
          <div className="flex items-end">
            <img
              className="w-[70px] sm:w-[80px] md:w-[90px] mr-7"
              src={num2}
              alt="number"
            />
            <p className="text-gray-500 max-w-[310px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod adipiscing.
            </p>
          </div>
          <div className="flex items-end">
            <img
              className="w-[70px] sm:w-[80px] md:w-[90px] mr-7"
              src={num3}
              alt="number"
            />
            <p className="text-gray-500 max-w-[310px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
              eiusmod adipiscing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
