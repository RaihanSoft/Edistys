const Footer = () => {
  return (
    <div className="w-full" >
      <footer className="text-white">
        {/* Main Footer Section */}
        <div className="pn bg-[#002045] mx-auto p-4 sm:p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo Section */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold">ANTECH</h2>
          </div>

          {/* Our Solutions Section */}
          <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-center text-sky-300 font-semibold text-lg md:text-xl">
            <p>Our Solutions</p>
            <div className="hidden md:block h-6 border-l border-gray-400 mx-2"></div>
            <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
              <li className="cursor-pointer hover:text-white transition">AnyCaaS</li>
              <li className="cursor-pointer hover:text-white transition">AnyBaaS</li>
              <li className="cursor-pointer hover:text-white transition">AnyPaaS</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-blue-500 text-sm md:text-base font-bold bg-[#00152d] p-3 md:p-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p>©2022 All rights reserved. Any Technology Plc Ltd.</p>
          <p className="cursor-pointer hover:text-white transition">Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
