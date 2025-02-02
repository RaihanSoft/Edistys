import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import svg1 from "../assets/backgrounds/WaveLinesDesktop1.svg";
import svg2 from "../assets/backgrounds/WaveLinesDesktop2.svg";
import heroImage from "../../public/banner-image.png";
import logo from '../../public/logo2.png'

const Banner = () => {
  const [isXLScreen, setIsXLScreen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXLScreen(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const normalized = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      };
      mouseX.set(normalized.x);
      mouseY.set(normalized.y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const AnimatedSVG = ({ src, position, hoverDirection }) => {
    const xRange = hoverDirection === "up" ? [-10, 10] : [10, -10];
    const yRange = hoverDirection === "up" ? [-8, 8] : [8, -8];

    const x = useSpring(useTransform(smoothX, [-1, 1], xRange), {
      damping: 30,
      stiffness: 80,
    });
    const y = useSpring(useTransform(smoothY, [-1, 1], yRange), {
      damping: 30,
      stiffness: 80,
    });

    return (
      <motion.img
        src={src}
        alt="Decorative Wave"
        className="absolute opacity-40"
        style={{ ...position, width: "100%", x, y }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
      />
    );

  };


  return (
    <>

      <div
        style={{
          clipPath: isXLScreen ? "polygon(0 0, 100% 0, 100% 85%, 0 100%)" : "none",
        }}
        className="relative text-white overflow-hidden bg-blue-800 pl-10  "
      >

        <nav className="flex xl:absolute z-10 justify-between items-center w-11/12 py-3 mx-auto">
          {/* <h1 className="text-2xl font-bold">ANYTECH</h1> */}
          <div className="flex gap-2 items-center h-6 ">
            <img src={logo} alt="ANYTECH" />
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 text-center flez items-center">
            <div className="relative group">
              <button className="flex items-center hover:text-blue-300">
                Solutions
                <svg
                  className="ml-1 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded hidden group-hover:block">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Solution 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Solution 2
                </a>
              </div>
            </div>
            <a href="#" className="hover:text-gray-200">Services</a>
            <a href="#" className="hover:text-gray-200">About Us</a>
            <div className="relative group">
              <button className="flex items-center border-1 rounded-full p-2 text-center flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
                EN
                <svg
                  className="ml-1 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-24 bg-white text-gray-800 shadow-lg rounded hidden group-hover:block">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  EN
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  FR
                </a>
              </div>
            </div>
          </div>
          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          {isOpen && (
            <div className="absolute z-50 top-16 left-0 w-full bg-gray-800 p-4 md:hidden">
              <a href="#" className="block text-white py-2">Solutions</a>
              <a href="#" className="block text-white py-2">Services</a>
              <a href="#" className="block text-white py-2">About Us</a>
              <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg text-white mt-4 w-full">
                Contact Us
              </button>
            </div>
          )}
          {/* Contact Button */}
          <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-sm text-lg text-white hidden md:block">Contact Us</button>
        </nav>

        <div className="relative grid xl:grid-cols-12 container mx-auto">

          <div className="col-span-4 text-center md:text-left z-10">
            <h2 className="xl:text-7xl md:text-5xl text-4xl text-left font-bold leading-tight xl:absolute mt-20">
              Embrace the <br /> <span className="">future of finance</span>
            </h2>
            <p className="text-lg xl:mt-68 xl:absolute text-left mt-2">
              Reimagine financial services with AnyTech’s open platform,
              distributed <br /> banking solution that powers transformation.
            </p>
            <div className="flex" >
              <button className=" mt-2 xl:mt-96 bg-[#FE8B53] hover:bg-orange-600 px-6 py-3 rounded-lg text-lg  md:w-[200px] ">
                Reach Out to Us
              </button>
            </div>
          </div>

          <div className="xl:relative xl:col-span-8 xl:mt-0 mt-6">
            <div data-aos="fade-left" className="relative overflow-hidden ">
              <img
                src={heroImage}
                alt="Professional woman with phone"
                className="relative object-cover rounded-lg shadow-lg scale-[1.4] -ml-24 transform xl:block hidden"
                style={{
                  clipPath: "polygon(77% 0, 100% 0, 100% 49%, 72% 100%, 21% 100%)",
                }}
              />
              <div >
                <img
                  src={heroImage}
                  alt="Professional woman with phone"
                  className="xl:relative object-cover rounded-lg shadow-lg w-full xl:hidden block mb-5 "
                />
              </div>
            </div>
          </div>
        </div>

        <AnimatedSVG src={svg1} position={{ bottom: 10, left: 50 }} hoverDirection="up" />
        <AnimatedSVG src={svg2} position={{ bottom: 140, left: 10 }} hoverDirection="down" />

      </div>
    </>
  );
};

export default Banner;
