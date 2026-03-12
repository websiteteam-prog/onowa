import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import Img from "../../../public/assets/harley-davidson.jpg";
import Img2 from "../../../public/assets/abc.avif";
import Img3 from "../../../public/assets/abcd.webp";
import Img4 from "../../../public/assets/ab.jpg";

const products = [
  {
    id: 1,
    image: Img,
    category: "On/Off Road",
    title: "RSR048 DRYMASTER RAIN SUIT",
    price: "$47.90 – $55.40",
    rating: 5,
  },
  {
    id: 2,
    image: Img2,
    category: "Racing",
    title: "HJC CL-Y Solid Helmet",
    price: "$60.00",
    oldPrice: "$72.00",
    rating: 4,
  },
  {
    id: 3,
    image: Img3,
    category: "On/Off Road",
    title: "Knee Pad Elbow Pads",
    price: "$59.90",
    rating: 5,
  },
  {
    id: 4,
    image: Img4,
    category: "Scooter",
    title: "City Hunter Backpack",
    price: "$64.80",
    rating: 5,
  },
  {
    id: 5,
    image: Img,
    category: "bike",
    title: "City KTM Backpack",
    price: "$61.80",
    rating: 4.5,
  },
];

const CARD_WIDTH = 300;
const GAP = 32;

const ProductSection = () => {
  const [index, setIndex] = useState(0);

  const maxIndex = products.length - 4;

  const prev = () => setIndex((prev) => Math.max(prev - 1, 0));
  const next = () => setIndex((prev) => Math.min(prev + 1, maxIndex));

  return (
    <section className="bg-[#f6f2ea] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-14">

          <div>
            <span className="inline-block bg-red-600 text-white text-xs font-semibold px-4 py-2 mb-4">
              SHOP ONLINE
            </span>

            <h2 className="text-neutral-900 text-4xl font-extrabold">
              OUR PRODUCTS
            </h2>
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="border border-neutral-300 p-2 text-neutral-800 hover:border-red-600 transition disabled:opacity-40"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              disabled={index === maxIndex}
              className="border border-neutral-300 p-2 text-neutral-800 hover:border-red-600 transition disabled:opacity-40"
            >
              <ChevronRight />
            </button>
          </div>

        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[300px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductSection;