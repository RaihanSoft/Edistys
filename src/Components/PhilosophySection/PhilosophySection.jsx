
const PhilosophySection = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="text-center mb-12">
        <h3 className="text-sm font-semibold text-blue-500 uppercase">
          Our Philosophy
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Human-centred innovation
        </h1>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Section */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h4 className="text-sm font-semibold text-blue-500 uppercase">
            Core Tech
          </h4>
          <h2 className="text-lg font-bold text-gray-900 mt-2">
            Artificial Intelligence
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Using AI/ML to upgrade legacy processes, reduce cost, and improve
            efficiency
          </p>
        </div>

        {/* Center Section */}
        <div className="text-center">
          <h4 className="text-sm font-semibold text-orange-500 uppercase">
            Mechanism
          </h4>
          <h2 className="text-lg font-bold text-gray-900 mt-2">Blockchain</h2>
          <p className="text-sm text-gray-500 mt-2">
            Enhanced security by eliminating intermediaries
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-sm font-semibold text-green-500 uppercase">
              Infrastructure
            </h4>
            <h2 className="text-lg font-bold text-gray-900 mt-2">Cloud</h2>
            <p className="text-sm text-gray-500 mt-2">
              Scale resources easily on-demand
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h4 className="text-sm font-semibold text-yellow-500 uppercase">
              Resource
            </h4>
            <h2 className="text-lg font-bold text-gray-900 mt-2">Data</h2>
            <p className="text-sm text-gray-500 mt-2">
              Valuable, actionable insights from mass data sources
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
