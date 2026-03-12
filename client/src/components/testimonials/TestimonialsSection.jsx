import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Diana Beckham",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=47",
    text:
      "I bought a Ducati Scrambler earlier this year. The sales consultant was Bruce. It was a very pleasant experience that I will happily recommend to any other buyer.",
  },
  {
    name: "Robert Downey",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=12",
    text:
      "This is my first A licence bike. Within 2 minutes of riding I was comfortable and happy. It's a lot more nimble and exciting than I expected.",
  },
  {
    name: "Alex Turner",
    role: "Customer",
    image: "https://i.pravatar.cc/100?img=33",
    text:
      "Great service and beautiful bikes. The team really knows what they are doing and helped me choose the perfect ride.",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const isFirst = index === 0;
  const isLast = index + 2 >= testimonials.length;

  const prev = () => {
    if (!isFirst) {
      setIndex((prev) => prev - 2);
    }
  };

  const next = () => {
    if (!isLast) {
      setIndex((prev) => prev + 2);
    }
  };

  const visibleTestimonials = testimonials.slice(index, index + 2);

  return (
    <section className="bg-gradient-to-b from-black via-neutral-950 to-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <span className="inline-block bg-red-600 text-white text-xs font-semibold px-4 py-2 rounded-md mb-4">
              TESTIMONIALS
            </span>
            <h2 className="text-white text-4xl font-extrabold tracking-wide">
              WHAT CLIENTS SAY ABOUT US
            </h2>
          </div>

          {/* Controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              disabled={isFirst}
              className={`
                w-12 h-12 flex items-center justify-center
                border rounded-lg transition
                ${
                  isFirst
                    ? "bg-neutral-800 border-neutral-800 text-neutral-500 cursor-not-allowed"
                    : "bg-neutral-900 border-neutral-800 text-white hover:border-red-600 hover:bg-neutral-800"
                }
              `}
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              disabled={isLast}
              className={`
                w-12 h-12 flex items-center justify-center
                border rounded-lg transition
                ${
                  isLast
                    ? "bg-neutral-800 border-neutral-800 text-neutral-500 cursor-not-allowed"
                    : "bg-neutral-900 border-neutral-800 text-white hover:border-red-600 hover:bg-neutral-800"
                }
              `}
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {visibleTestimonials.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;