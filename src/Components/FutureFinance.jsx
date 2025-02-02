import { motion } from "framer-motion";
import bannerSVG1 from "../assets/story/3.svg";
import bannerSVG2 from "../assets/story/2.svg";
import womanimg from "../assets/story/Woman.png";
import icon1 from "../assets/icons/small icon/Icon1.svg";
import icon2 from "../assets/icons/small icon/Icon2.svg";
import icon3 from "../assets/icons/small icon/Icon3.svg";

const FutureFinance = () => {
  // Motion variants for floating animations
  const floatAnimation = {
    animate: {
      y: [0, -4, 0],
    },
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className=" w-11/12 -mt-20 px-4 py-16 md:py-24 mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-20 md:gap-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 space-y-4 mt-10">
          <p className="text-[#388EF2] font-bold tracking-wide uppercase pl-16 md:pl-0">
            Powering the future of finance
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0B305B] leading-tight pl-16 md:p-0 md:text-left">
            Uncovering new ways to delight customers
          </h2>
          <div className="mt-6 hidden md:block space-y-4">
            <p className="text-gray-700 leading-relaxed font-bold">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative aspect-square">
            {/* Background Shapes */}
            <motion.div
              className="absolute -top-20 left-0 w-72 h-72 md:w-96 md:h-96 transform rotate-180 opacity-50"
              {...floatAnimation}
            >
              <img src={bannerSVG1} alt="" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div
              className="absolute -top-10 right-10 md:-top-16 md:right-20 w-32 h-32"
              {...floatAnimation}
            >
              <img src={bannerSVG2} alt="" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div
              className="absolute -bottom-10 right-0 w-72 h-72 md:w-96 md:h-96 opacity-50"
              {...floatAnimation}
            >
              <img src={bannerSVG1} alt="" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div
              className="absolute bottom-20 right-10 w-32 h-32 z-10"
              {...floatAnimation}
            >
              <img src={bannerSVG2} alt="" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div
              className="absolute bottom-3 md:bottom-4 left-11 md:left-15 w-32 h-32 z-10"
              {...floatAnimation}
            >
              <img src={bannerSVG2} alt="" className="w-full h-full object-contain" />
            </motion.div>
            <motion.div
              className="absolute bottom-4 left-1/4 w-32 h-32"
              {...floatAnimation}
            >
              <img src={bannerSVG2} alt="" className="w-full h-full object-contain" />
            </motion.div>

            {/* Main Image */}
            <div className="relative z-10 flex justify-center items-center">
              <img
                src={womanimg}
                alt="Financial Technology"
                className="w-[80%] object-cover shadow-xl"
              />
            </div>

            {/* Floating Icons */}
            <motion.div
              className="absolute left-5 top-[15%] z-10"
              {...floatAnimation}
            >
              <img src={icon3} alt="" className="sm:w-20 w-16 h-16 sm:h-20" />
            </motion.div>
            <motion.div
              className="absolute right-0 top-[10%] z-10"
              {...floatAnimation}
            >
              <img src={icon1} alt="" className="sm:w-28 w-16 h-16 sm:h-28" />
            </motion.div>
            <motion.div
              className="absolute top-[35%] left-[20%] z-10"
              {...floatAnimation}
            >
              <img src={icon2} alt="" className="sm:w-24 w-16 h-16  sm:h-24" />
            </motion.div>
          </div>
        </div>

        {/* Mobile Content */}
        <div className="mt-6 md:hidden space-y-4">
          <p className="text-gray-700 leading-relaxed font-bold">
            AnyTech is revolutionising financial technology by introducing
            innovative and real-time transaction account processing
            capabilities, specifically designed for retail financial services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our modern approach surpasses traditional banking and card
            processing systems, empowering you with the most advanced technology
            for lasting success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FutureFinance;
