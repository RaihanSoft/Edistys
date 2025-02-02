import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import img1 from '../assets/img1.avif'
import img2 from '../assets/img2.avif'
import img3 from '../assets/img3.avif'
import img4 from '../assets/img4.avif'

const sections = [
  {
    subtitle: "Customer focused",
    title: 'Purpose-built financial services',
    content:
      "Elevate customer experience and achieve agile financial product innovation with the worlds first, consumer-centric, real-time transaction account processing and credit limit system Experience the advantages of integrated retail financial services technology, real-time analysis of transactional behaviour and product marketing opportunities"
     ,
    image: img1,
  },
  {
    subtitle: "Agile and adaptable",
    title:'Agile and adaptable for growth',
    content:'Innovate with evolving customer demands through our open platform-based technology architecture. Stay ahead of the ever-changing financial landscape with a strong focus on security, compliance and performance.Optimise your offerings to unlock new revenue streams and deliver an extraordinary customer experience, with digitally designed core banking, payment processing and lending capabilities.',
    image: img2,
  },
  {
    subtitle: "Compliance ready",
    title: "Manage compliance with ease",
    content:"Navigate through the evolving regulatory landscape with confidence by streamlining compliancmanagement through real-time risk monitoring solutions powered by Al andmachine learning.Transform your compliance strategy with flexible and diversifiedpolicy rules, powered by cutting-edge technology that isdesigned for seamless integration with core banking and cardpayment systems.",
    image: img3,
  },
  {
    subtitle:'Secure and safe',
    title: "Highly secure and safe",
    content:
      "Discover unparalleled security trusted by financial institutions across the globe. Our applications are meticulously developed in compliance with international security standards, drawing on 20 years of technical expertise.Join over 40 esteemed Fls, each serving more than 200 million customers, and benefit from our secure, robust and reliable infrastructure..",
    image: img4,
  },
];

const FinanceSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      swiperRef.current.autoplay.stop();
    }
  };

  return (
    <div className="w-11/12 mx-auto text-center p-8 mt-10">
      <p className="text-blue-500 font-semibold">TECHNOLOGY BUILT FOR YOU</p>
      <h2 className="xl:text-7xl text-3xl font-bold mt-2 text-gray-700">
        The future of finance
      </h2>

      {!isMobile && (
        <div className="flex justify-center gap-4 mt-10">
          {sections.map((section, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm lg:text-lg text-blue-500 font-semibold transition-all ${
                activeIndex === index
                  ? "bg-blue-200 text-blue-800"
                  : "text-blue-500 hover:bg-gray-100"
              }`}
              onClick={() => handleSlideChange(index)}
            >
              {section.subtitle}
            </button>
          ))}
        </div>
      )}

      <Swiper
        className="mt-8 "
        autoplay={
          isMobile
            ? { delay: 3000, disableOnInteraction: false }
            : { delay: 3000 }
        }
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {sections.map((section, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white  rounded-2xl shadow-lg flex flex-col md:flex-row  text-left gap-6">
              <div className="md:w-1/2 space-y-4">
                <p className="text-blue-500 text-xs font-bold uppercase">
                  {section.subtitle}
                </p>
                <h3 className="text-4xl font-bold text-gray-900">
                  {section.title} for growth
                </h3>
                <p className="text-gray-600 mt-2 ">{section.content}</p>
              </div>
              <img
                src={section.image}
                alt="Finance"
                className="md:w-1/2 rounded-lg  md:h-[320px] "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FinanceSection;