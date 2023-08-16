import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [mobileNav, setMobileNav] = useState(false);

  const detectWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectWidth);

    if (windowWidth < 640) {
      setMenuIcon(true);
    } else {
      setMenuIcon(false);
    }

    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  }, [windowWidth]);

  return (
    <nav className="max-w-[1600px] mx-auto p-8 sm:p-10 flex justify-between items-center">
      <h3 className=" text-blue-500 sm:text-lg">CONSTRUCTION</h3>
      <ul className="hidden sm:flex gap-5 text-gray-700 sm:text-lg ">
        <li className="text-black font-medium">Home</li>
        <li>About Us</li>
        <li>Services</li>
        <li>Project</li>
      </ul>
      {menuIcon ? (
        <AiOutlineMenu
          onClick={() => setMobileNav(!mobileNav)}
          size={25}
          className="cursor-pointer"
        />
      ) : (
        ""
      )}
      {mobileNav ? (
        <div className="bg-black/80 fixed right-0 w-full h-screen z-10 top-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          mobileNav
            ? "fixed top-0 right-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          className="absolute right-7 top-8 cursor-pointer"
          size={25}
          onClick={() => setMobileNav(!mobileNav)}
        />
        <h3 className=" text-blue-500 sm:text-lg mx-6 mt-8">CONSTRUCTION</h3>
        <ul className="mx-6 mt-10 flex flex-col justify-evenly gap-5 text-gray-700">
          <li className="text-xl text-black font-medium">Home</li>
          <li className="text-xl">About Us</li>
          <li className="text-xl">Services</li>
          <li className="text-xl">Project</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
