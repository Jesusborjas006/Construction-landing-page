import map from "../construction-images/map.png";

const Contact = () => {
  return (
    <section className="max-w-[1600px] mx-auto p-8 sm:p-10 text-center mb-10">
      <h2 className="text-3xl mb-4 md:text-4xl font-semibold">Contact Us</h2>
      <h4 className="text-sm text-gray-500 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
        tempor incididunt.
      </h4>
      <div className="flex flex-col lg:flex-row gap-y-10">
        <form className="flex flex-col space-y-4 w-[100%] lg:w-[35%] mx-auto">
          <input
            className="bg-gray-100 py-2 px-4 rounded-sm"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-gray-100 py-2 px-4 rounded-sm"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-gray-100 py-2 px-4 rounded-sm"
            type="text"
            placeholder="Subject"
          />
          <textarea
            rows="10"
            className="bg-gray-100 py-2 px-4 h-auto resize-none"
            placeholder="Message"
          />
          <button className=" text-white w-[160px] text-sm bg-blue-500 rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md py-3 px-8 shadow-xl ">
            Send Message
          </button>
        </form>
        <img className="lg:w-[65%] max-h-[600px] mx-auto" src={map} alt="map" />
      </div>
    </section>
  );
};

export default Contact;
