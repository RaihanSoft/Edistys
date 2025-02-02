import { motion, useMotionValue, useSpring } from "framer-motion";
import svg1 from "../../assets/backgrounds/WaveLinesDesktop1.svg";
import svg2 from "../../assets/backgrounds/WaveLinesDesktop2.svg";
import heroImage from "../../../public/banner-image.png";

const Hero = () => {
  const mouseX = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 100, stiffness: 100 });

  const handleMouseMove = (e) => {
    const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseX.set(normalizedX * 15);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 95%, 0 100%)" }}
      className="relative text-white overflow-hidden bg-blue-800 pl-10"
    >
      {/* Navigation */}
      <nav className="flex w-full z-10 justify-between items-center pr-10 pt-6 container mx-auto">
        <h1 className="text-2xl font-bold">ANYTECH</h1>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-gray-200">Solutions</a>
          <a href="#" className="hover:text-gray-200">Services</a>
          <a href="#" className="hover:text-gray-200">About Us</a>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg text-white">Contact Us</button>
      </nav>

      {/* Hero Section */}
      <div className="relative grid grid-cols-12 container mx-auto">
        {/* Left Content */}
        <div className="col-span-4 text-center md:text-left z-10">
          <h2 className="text-7xl font-bold leading-tight absolute mt-20">
            Embrace the <br /> <span className="">future of finance</span>
          </h2>
          <p className="text-lg mt-68 absolute">
            Reimagine financial services with AnyTech’s open platform, distributed <br /> banking solution that powers transformation.
          </p>
          <button className="mt-96 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg text-lg">Reach Out to Us</button>
        </div>

        {/* Right Image with Overlay */}
        <div className="relative col-span-8">
          {/* Main Image */}
          <div className="relative overflow-hidden">
            <img
              src={heroImage}
              alt="Professional woman with phone"
              className="relative object-cover rounded-lg shadow-lg scale-[1.4] -ml-24 transform"
              style={{ clipPath: "polygon(77% 0, 100% 0, 100% 49%, 72% 100%, 21% 100%)" }}
            />
          </div>
        </div>
      </div>

      {/* SVG Waves */}
      <div className="absolute inset-0 w-full h-full">
        <motion.img
          src={svg1}
          alt="wave"
          className="absolute -bottom-10 left-0 w-full opacity-100 z-0"
          style={{ x: smoothX }}
        />
        <motion.img
          src={svg2}
          alt="wave"
          className="absolute bottom-50 left-0 w-full opacity-100 z-0"
          style={{ x: smoothX }}
        />
      </div>
    </div>
  );
};

export default Hero;
