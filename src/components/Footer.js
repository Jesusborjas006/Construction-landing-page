const Footer = () => {
  return (
    <footer className="max-w-[1600px] mx-auto p-8 sm:p-10 ">
      <div className="flex justify-between text-gray-700 gap-2">
        <div className="max-w-[210px] hidden md:block ">
          <h3 className="text-blue-500 sm:text-lg mb-4">CONSTRUCTION</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
            doeiusmod.
          </p>
        </div>
        <div className=" text-sm sm:text-base">
          <h4 className="mb-4 font-semibold text-black">Resources</h4>
          <ul className=" space-y-2">
            <li>Our Agents</li>
            <li>Member Stories</li>
            <li>Video</li>
            <li>Free Trial</li>
          </ul>
        </div>
        <div className=" text-sm sm:text-base">
          <h4 className="mb-4 font-semibold text-black">Company</h4>
          <ul className=" space-y-2">
            <li>Partnerships</li>
            <li>Terms of use</li>
            <li>Privacy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className=" text-sm sm:text-base">
          <h4 className="mb-4 text-black font-semibold">Get in touch</h4>
          <input
            className="w-[120px] sm:w-[200px] text-xs sm:text-sm pl-2 py-2 bg-gray-100"
            type="email"
            placeholder="Enter your email"
          />
        </div>
      </div>
      <hr className="my-10" />
      <p className="text-center text-xs text-gray-700">
        Copyright CONSTRUCTION, All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
