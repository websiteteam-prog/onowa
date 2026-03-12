import { Gauge, VolumeX, Bike, Zap } from "lucide-react";

const data = [
  { icon: Gauge, title: "Speed Stable" },
  { icon: VolumeX, title: "Silent Power" },
  { icon: Bike, title: "Ride Smart" },
  { icon: Zap, title: "Smart Power" },
];

const Features = () => {
  return (
    <section className="py-20 bg-[#f6f2ea]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-12">
          Best Picks for Onowa
        </h2>

        <div className="grid md:grid-cols-4 gap-10">
          {data.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-full shadow hover:shadow-lg transition"
              >
                <Icon className="mx-auto mb-4 text-orange-500" size={40} />
                <p className="font-semibold">{item.title}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;