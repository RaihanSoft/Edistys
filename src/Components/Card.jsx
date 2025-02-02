import  { useEffect } from "react";
import { Lightbulb, Cpu, Briefcase } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-700" />,
    title: "Full-suite solutions",
    description:
      "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
    bgColor: "bg-blue-100",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-blue-700" />,
    title: "Simplify the complex",
    description:
      "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
    bgColor: "bg-green-100",
  },
  {
    icon: <Cpu className="w-8 h-8 text-blue-700" />,
    title: "Cutting-edge tech",
    description:
      "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
    bgColor: "bg-red-100",
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex w-11/12 mx-auto flex-col lg:flex-row gap-6 p-6 bg-gray-50">
      {features.map((feature, index) => (
        <div
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          className="flex-1 p-6 rounded-2xl shadow-sm bg-gradient-to-br from-[#e6f4ff] to-white hover:shadow-md transition duration-300"
        >
          <div
            className={`w-14 h-14 flex items-center justify-center rounded-full ${feature.bgColor} mb-4`}
          >
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-700 leading-relaxed">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
