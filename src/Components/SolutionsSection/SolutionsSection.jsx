const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      icon: "🔗", // Replace with an actual icon or SVG
      title: "Full-suite solutions",
      description:
        "Experience the ease of integration across various banking and payment functions with our comprehensive suite of solutions.",
      bg: "bg-blue-100",
    },
    {
      id: 2,
      icon: "💡", // Replace with an actual icon or SVG
      title: "Simplify the complex",
      description:
        "Simplify complex processes and optimise your financial operations by leveraging the power of AI, Blockchain, Cloud Computing, and Big Data.",
      bg: "bg-teal-100",
    },
    {
      id: 3,
      icon: "⚙️", // Replace with an actual icon or SVG
      title: "Cutting-edge tech",
      description:
        "We seamlessly combine cutting-edge technologies, resulting in an unparalleled fintech experience for financial institutions.",
      bg: "bg-red-100",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className={`rounded-lg shadow-lg p-8 text-center ${solution.bg}`}
          >
            <div className="flex justify-center items-center w-12 h-12 mx-auto bg-white rounded-full mb-4">
              <span className="text-2xl">{solution.icon}</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {solution.title}
            </h3>
            <p className="text-sm text-gray-600 mt-4">{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsSection;
