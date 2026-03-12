import {
    Droplet,
    Fan,
    Trash2,
    Disc,
    Fuel,
    ShieldCheck,
    ArrowUpRight,
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
    {
        title: "Annual Service",
        desc:
            "Routine maintenance and yearly tune-ups are important to keep your bike running smoothly and avoid costly repairs.",
        icon: <Droplet size={36} />,
    },
    {
        title: "Winterization",
        desc:
            "Avoid future issues by making sure your motorcycle is ready for the cold winter months or storage.",
        icon: <Fan size={36} />,
    },
    {
        title: "Spring Maintenance",
        desc:
            "Prepare your ride for optimal performance during summer with proper checks and maintenance.",
        icon: <Trash2 size={36} />,
    },
    {
        title: "Tire Change Service",
        desc:
            "Whether balancing, rotating or replacing tires, we’ll get you back on the road fast.",
        icon: <Disc size={36} />,
    },
    {
        title: "Oil Changes",
        desc:
            "Preventive maintenance to inspect, change and refill essential systems of your vehicle.",
        icon: <Fuel size={36} />,
    },
    {
        title: "Brake Inspection",
        desc:
            "From pads to fluids, we ensure reliable stopping power and responsive brakes.",
        icon: <ShieldCheck size={36} />,
    },
];

const ServicesSection = () => {
    return (
        <section className="bg-black py-28">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-20">
                    <div>
                        <span className="inline-block bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-md mb-4">
                            OUR SERVICES
                        </span>
                        <h2 className="text-white text-4xl font-bold">
                            THE SERVICES WE PROVIDE
                        </h2>
                    </div>

                    <a
                        href="#"
                        className="hidden md:flex items-center gap-2 text-sm font-semibold text-white hover:text-red-600 transition"
                    >
                        VIEW ALL TYPE <ArrowUpRight size={16} />
                    </a>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;