const VisionMission = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">

      {/* Statement */}
      <div className="bg-white shadow-md p-10 rounded-lg transition duration-300 hover:bg-orange-100 cursor-pointer">
        <h3 className="text-xl font-bold mb-4 text-neutral-900">
          Our Mission and Vision Statement
        </h3>

        <p className="text-neutral-600">
          Experience unmatched power, premium style, and eco-friendly
          sustainability in every Onowa ride.
        </p>
      </div>

      {/* Vision */}
      <div className="bg-white shadow-md p-8 rounded-lg transition duration-300 hover:bg-orange-100 cursor-pointer">
        <h3 className="font-bold mb-3 text-neutral-900">
          Our Vision
        </h3>

        <p className="text-neutral-600">
          To transform urban mobility by creating a sustainable,
          smart, and eco-friendly transportation ecosystem.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white shadow-md p-8 rounded-lg transition duration-300 hover:bg-orange-100 cursor-pointer">
        <h3 className="font-bold mb-3 text-neutral-900">
          Our Mission
        </h3>

        <p className="text-neutral-600">
          To revolutionize everyday commuting by delivering
          high-performance electric scooters.
        </p>
      </div>

    </section>
  );
};

export default VisionMission;