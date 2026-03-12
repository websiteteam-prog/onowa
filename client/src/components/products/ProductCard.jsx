import { ShoppingCart, Heart, Eye } from "lucide-react";

const ProductCard = ({ product }) => {
  return (
    <div className="group text-center bg-white shadow-md hover:shadow-xl transition rounded-lg p-6">

      {/* Image */}
      <div className="relative mb-6 overflow-hidden bg-neutral-50">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-[260px] object-contain p-6"
        />

        {/* Hover icons */}
        <div className="
          absolute inset-0 flex items-center justify-center gap-4
          bg-black/30 opacity-0
          group-hover:opacity-100
          transition
        ">

          <button className="bg-white p-3 hover:bg-red-600 hover:text-white transition">
            <ShoppingCart size={18} />
          </button>

          <button className="bg-white p-3 hover:bg-red-600 hover:text-white transition">
            <Heart size={18} />
          </button>

          <button className="bg-white p-3 hover:bg-red-600 hover:text-white transition">
            <Eye size={18} />
          </button>

        </div>
      </div>

      {/* Category */}
      <p className="text-sm text-neutral-500 mb-1">
        {product.category}
      </p>

      {/* Title */}
      <h3 className="text-neutral-900 font-semibold mb-2">
        {product.title}
      </h3>

      {/* Rating */}
      <div className="flex justify-center gap-1 mb-3 text-yellow-400">
        {"★".repeat(product.rating)}
        {"☆".repeat(5 - product.rating)}
      </div>

      {/* Price */}
      <div className="text-red-600 font-semibold">
        {product.oldPrice && (
          <span className="line-through text-neutral-400 mr-2">
            {product.oldPrice}
          </span>
        )}
        {product.price}
      </div>

    </div>
  );
};

export default ProductCard;