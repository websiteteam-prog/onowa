import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

function ProductDetails() {

  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {

    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data.data));

  }, [id]);

  const addToCart = () => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      toast("Already added to cart 🛒", {
        duration: 3000,
      });
      return;
    }

    cart.push({
      id: product.id,
      name: product.title,
      price: product.price,
      qty: 1,
      image: product.image
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    window.dispatchEvent(new Event("cartUpdated"));

    toast.success("Product added to cart ✅", {
      duration: 3000,
    });
  };

  if (!product) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto p-10 grid grid-cols-2 gap-10">

      {/* IMAGE */}
      <img
        src={
          product.image?.startsWith("http")
            ? product.image
            : `http://localhost:3000${product.image}`
        }
        alt={product.title}
        className="w-full h-[400px] object-cover rounded-lg"
      />

      {/* DETAILS */}
      <div>

        <h1 className="text-3xl font-bold mb-4">
          {product.title}
        </h1>

        <p className="text-red-500 text-2xl font-bold mb-4">
          ₹ {product.price}
        </p>

        <p className="text-gray-600 mb-6">
          {product.description || "No description available"}
        </p>

        <button
          onClick={addToCart}
          className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600"
        >
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;