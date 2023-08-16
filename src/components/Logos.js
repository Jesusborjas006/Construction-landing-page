import logo1 from "../construction-images/logo1.png";
import logo2 from "../construction-images/logo2.png";
import logo3 from "../construction-images/logo3.png";
import logo4 from "../construction-images/logo4.png";
import logo5 from "../construction-images/logo5.png";

const Logos = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5];

  return (
    <div className=" bg-gray-100 rounded-full flex items-center justify-evenly py-10 px-2">
      {logos.map((logo) => (
        <img
          className="max-w-[65px] sm:max-w-[75px] md:max-w-[110px]"
          src={logo}
          alt="logo"
        />
      ))}
    </div>
  );
};

export default Logos;
