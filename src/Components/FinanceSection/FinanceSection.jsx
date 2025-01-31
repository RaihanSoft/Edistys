import img from '../../assets/finance.avif'


import svg1 from "../../assets/backgrounds/WaveLinesDesktop1.svg";
import icon1 from "../../assets/backgrounds/icon1.svg";
import icon2 from "../../assets/backgrounds/icon22.svg";
import icon3 from "../../assets/backgrounds/icon33.svg";

import svg2 from "../../assets/backgrounds/WaveLinesDesktop4.svg";
const FinanceSection = () => {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-16 py-12">
            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
                <h4 className="text-blue-600 uppercase text-sm font-semibold tracking-wide">
                    Powering the Future of Finance
                </h4>
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2">
                    Uncovering new ways to delight customers
                </h1>
                <p className="mt-4 text-gray-700 text-lg">
                    <strong>AnyTech</strong> is revolutionizing financial technology by introducing
                    innovative and real-time transaction account processing capabilities,
                    specifically designed for retail financial services.
                </p>
                <p className="mt-4 text-gray-600">
                    Our modern approach surpasses traditional banking and card processing
                    systems, empowering you with the most advanced technology for lasting
                    success.
                </p>
            </div>

            {/* Image Section */}
            <div className="relative mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
                <img
                    src={img}
                    alt="Finance Technology"
                    className="w-full max-w-lg rounded-lg shadow-lg"
                />
                {/* SVG Waves */}
                <div className="absolute inset-0 w-full h-full">
                    <img src={svg1} alt="wave" className="absolute -bottom-10 left-10 w-full opacity-100 z-0" />
                    {/* <img src={svg2} alt="wave" className="absolute bottom-50 left-0 w-full opacity-100 z-0" /> */}
                    {/* <img src={svg3} alt="wave" className="absolute bottom-0 left-0 w-full opacity-40 z-0" /> */}
                    <img src={svg2} alt="wave" className="absolute -top-25 left-0 w-full opacity-60 z-0" />
                </div>

                {/* Floating Icons */}
                <div className="absolute top-5 left-5 bg-white p-2 rounded-full shadow-md">
                    <img src={icon1} alt="Banking Icon" className="w-10 h-10" />
                </div>
                <div className="absolute bottom-5 left-10 bg-white p-2 rounded-full shadow-md">
                    <img src={icon2} alt="Analytics Icon" className="w-10 h-10" />
                </div>
                <div className="absolute top-10 right-5 bg-white p-2 rounded-full shadow-md">
                    <img src={icon3} alt="Processing Icon" className="w-10 h-10" />
                </div>
            </div>
        </section>
    );
};

export default FinanceSection;
