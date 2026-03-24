import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Shop() {

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    fetch(`${import.meta.env.VITE_APP_BACKEND_URL}/product`)
      .then(res => res.json())
      .then(data => setProducts(data.data));

    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);

  }, []);

  // 🛒 ADD TO CART
  const addToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(item => item.id === product.id);

    if (exists) {
      toast.error("Already added to cart 🛒");
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

    toast.success("Added to cart ✅");
  };

  // ❤️ TOGGLE WISHLIST (ADD + REMOVE 🔥)
  const toggleWishlist = (product) => {

    let updatedWishlist = [...wishlist];

    const exists = updatedWishlist.find(item => item.id === product.id);

    if (exists) {
      // ❌ REMOVE
      updatedWishlist = updatedWishlist.filter(item => item.id !== product.id);

      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      toast("Removed from wishlist ❌");
    } else {
      // ✅ ADD
      updatedWishlist.push(product);

      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

      toast.success("Added to wishlist ❤️");
    }
  };

  // ❤️ CHECK
  const isInWishlist = (id) => {
    return wishlist.some(item => item.id === id);
  };

  return (

    <div className="max-w-7xl mx-auto px-6 py-12">

      <h2 className="text-3xl font-bold text-center mb-12 tracking-wide">
        Our Products
      </h2>

      <div className="grid grid-cols-3 gap-10">

        {products.map(product => (

          <div
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >

            {/* IMAGE */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                onClick={() => navigate(`/product/${product.id}`)}
                className="w-full h-60 object-cover cursor-pointer transform hover:scale-110 transition duration-300"
              />
            </div>

            <div className="p-5">

              <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                {product.title}
              </h3>

              <p className="text-red-500 font-bold text-xl mb-4">
                ₹ {product.price}
              </p>

              <div className="flex justify-between items-center">

                {/* CART */}
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  <ShoppingCart size={18} />
                  Add
                </button>

                {/* WISHLIST */}
                <button
                  onClick={() => toggleWishlist(product)}
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <Heart
                    size={20}
                    className={`transition ${
                      isInWishlist(product.id)
                        ? "fill-red-500 text-red-500 scale-110"
                        : "text-gray-500"
                    }`}
                  />
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Shop;