import BikeImg from "../../../public/assets/dheera-front3.webp"

const AboutCompany = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">

      {/* Content */}
      <div>

        <h2 className="text-3xl font-bold mb-6 text-orange-600">
          Onowa Electric Mobility
        </h2>

        <p className="text-neutral-600 leading-relaxed mb-4">
          Egaruda Electric Mobility Private Limited is committed to shaping
          the future of urban transportation through innovative electric
          mobility solutions. Our goal is to provide riders with efficient,
          eco-friendly, and stylish electric scooters designed for modern
          city life.
        </p>

        <p className="text-neutral-600 leading-relaxed mb-4">
          With a strong focus on sustainability and performance, Egaruda
          scooters combine advanced battery technology, smart engineering,
          and sleek design to deliver a smooth and reliable riding
          experience. We believe that electric mobility is not just an
          alternative but the future of transportation.
        </p>

        <p className="text-neutral-600 leading-relaxed">
          By choosing Egaruda, riders contribute to reducing carbon
          emissions while enjoying a cost-effective and intelligent
          commuting solution built for the next generation.
        </p>

      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={BikeImg}
          className="w-[380px] md:w-[420px] rounded-xl shadow-lg"
        />
      </div>

    </section>
  );
};

export default AboutCompany