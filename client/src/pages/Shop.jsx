import { useEffect, useState } from "react";
import { Heart, ShoppingCart } from "lucide-react";

function Shop() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:3000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));

  }, []);

  const addToCart = (product) => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exists = cart.find(item => item.id === product.id);

    if (exists) {

      cart = cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + 1 }
          : item
      );

    } else {

      cart.push({
        id: product.id,
        name: product.title,
        price: product.price,
        qty: 1,
        image: product.image
      });

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // 🔥 Navbar update event
    window.dispatchEvent(new Event("cartUpdated"));

    alert("Added to Cart");

  };

  const addToWishlist = (product) => {

    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find(item => item.id === product.id);

    if (!exists) {

      wishlist.push(product);

      localStorage.setItem("wishlist", JSON.stringify(wishlist));

      alert("Added to Wishlist ❤️");

    }

  };

  return (

    <div className="max-w-7xl mx-auto px-6 py-10">

      <h2 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-3 gap-8">

        {products.map(product => (

          <div
            key={product.id}
            className="border rounded-lg shadow hover:shadow-lg transition"
          >

            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover rounded-t-lg"
            />

            <div className="p-4">

              <h3 className="text-lg font-semibold mb-2">
                {product.title}
              </h3>

              <p className="text-red-500 font-bold text-xl mb-4">
                ₹ {product.price}
              </p>

              <div className="flex gap-3">

                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>

                <button
                  onClick={() => addToWishlist(product)}
                  className="border p-2 rounded hover:bg-gray-100"
                >
                  <Heart size={18} />
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