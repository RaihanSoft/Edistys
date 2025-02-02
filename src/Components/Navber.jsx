import { useState, useEffect } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from '../../public/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false); // Initially hidden

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // Check if scrolling to the top or not
      if (currentScrollPos <= 0) {
        setShowNavbar(false); // Hide navbar at the top
      } else if (currentScrollPos < prevScrollPos) {
        setShowNavbar(true); // Scrolling up
      } else {
        setShowNavbar(false); // Scrolling down
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className="hidden md:block" >
      <nav
        className={`relative shadow-2xl z-50 px-5 bg-white transition-all duration-300 ${showNavbar ? "top-0" : "-top-30"
          }`}
      >
        <div className="container px-6 py-4 mx-auto">
          <div className="lg:grid lg:items-center lg:grid-cols-6">
            <div className="flex lg:col-span-2 items-center justify-between">
              <div className="flex gap-2 items-center h-10">
                <img src={logo} alt="ANYTECH" />
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="  focus:outline-none"
                  aria-label="toggle menu"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 8h16M4 16h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`absolute inset-x-0 z-20 px-6 py-4 transition-all duration-300 ease-in-out bg-white  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between lg:col-span-4 ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
                }`}
            >
              <div className="flex flex-col -mx-6 md:flex-row  md:items-center  md:gap-10 ">
                {/* Dropdown Menu */}
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    className="px-6 py-2 mt-2  transition-colors duration-300 transform rounded-md lg:mt-0 text-blue-600 flex items-center justify-between w-11/12 mx-auto  lg:w-auto gap-4"
                  >
                    Solutions
                    <span>{isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                  </Link>

                  {/* Dropdown Content (Visible on hover) */}
                  {isDropdownOpen && (
                    <ul className="md:absolute md:left-0 md:top-12 md:bg-white text-gray-700 md:rounded-md md:shadow-md p-2 md:w-44 w-full z-50 ml-10">
                      <li>
                        <Link to="/anycaas" className="block px-4 py-2 hover:bg-gray-200">
                          AnyCaaS
                        </Link>
                      </li>
                      <li>
                        <Link to="/anybaas" className="block px-4 py-2 hover:bg-gray-200">
                          AnyBaaS
                        </Link>
                      </li>
                      <li>
                        <Link to="/anypaas" className="block px-4 py-2 hover:bg-gray-200">
                          AnyPaaS
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>

                {/* Other Links with Adjusted Margin */}
                <Link
                  to="/appointment"
                  className={`px-6  py-2 w-11/12 md:w-full mx-auto lg:mt-0 text-blue-500 z-50 transition-colors duration-300  transform rounded-md `}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className={`px-6 md:px-0 py-2 w-11/12 md:w-full mx-auto lg:mt-0 text-blue-600 transition-colors duration-300 transform rounded-md `}
                >
                  About
                </Link>
                <button
                  to="/about"
                  className={`px-6 md:px-0 py-2 w-11/12 md:w-full mx-auto lg:mt-0 text-blue-600 transition-colors duration-300 transform rounded-md `}
                >
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
                </button>
              </div>

              {/* Sign In Button */}
              <div className="flex items-center mt-4 lg:mt-0 gap-4">
                <button className=" bg-[#FE8B53] text-white px-8 py-6 text-lg btn btn-outline  ">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
