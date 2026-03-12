import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ title, desc, icon }) => {
  return (
    <div
      className="
        h-full
        px-12 py-14
        bg-neutral-950
        border border-neutral-800
        rounded-xl
      "
    >
      {/* Icon */}
      <div className="text-red-600 mb-8">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-white text-2xl font-semibold mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-neutral-400 text-sm leading-relaxed mb-10">
        {desc}
      </p>

      {/* CTA */}
      <button
        className="
          inline-flex items-center gap-2
          text-sm font-semibold
          text-white
          px-5 py-2
          border border-neutral-700
          rounded-lg
          hover:bg-red-600
          hover:border-red-600
          transition-colors
          cursor-pointer
        "
      >
        READ MORE
        <ArrowUpRight size={16} />
      </button>
    </div>
  );
};

export default ServiceCard;