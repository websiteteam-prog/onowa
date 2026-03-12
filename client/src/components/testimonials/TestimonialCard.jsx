import { Quote } from "lucide-react";

const TestimonialCard = ({ name, role, image, text }) => {
  return (
    <div
      className="
        relative
        h-full
        bg-neutral-950
        border border-neutral-800
        rounded-2xl
        p-10
        transition-all duration-300
        hover:border-red-600/50
      "
    >
      {/* Quote icon */}
      <Quote
        size={48}
        className="absolute bottom-8 right-8 text-red-600/80"
      />

      {/* Text */}
      <p className="text-neutral-300 text-base leading-relaxed mb-10 italic">
        {text}
      </p>

      {/* User */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border border-neutral-700"
        />
        <div>
          <h4 className="text-white font-semibold text-lg leading-tight">
            {name}
          </h4>
          <span className="text-neutral-400 text-sm">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;