import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";

const Wishlist = () => {

  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {

    const stored = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(stored);

  }, []);

  const remove = (id) => {

    const updated = wishlistItems.filter(item => item.id !== id);

    setWishlistItems(updated);

    localStorage.setItem("wishlist", JSON.stringify(updated));

    window.dispatchEvent(new Event("wishlistUpdated"));

  };

  return (

    <div className="bg-[#f3ede4] min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-12">
          Wishlist ❤️
        </h1>

        {wishlistItems.length === 0 ? (

          <div className="text-center py-32 bg-white rounded-2xl shadow-sm">

            <h2 className="text-2xl font-semibold mb-4">
              Your wishlist is empty
            </h2>

          </div>

        ) : (

          <div className="grid grid-cols-3 gap-8">

            {wishlistItems.map(item => (

              <div
                key={item.id}
                className="bg-white border rounded-xl p-5 shadow-sm"
              >

                <img
                  src={item.image}
                  className="w-full h-52 object-cover rounded-lg"
                />

                <h3 className="mt-3 font-semibold">
                  {item.title}
                </h3>

                <p className="text-red-500 font-bold">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => remove(item.id)}
                  className="flex items-center gap-2 mt-4 bg-red-500 text-white px-4 py-2 rounded"
                >
                  <Trash2 size={16} />
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );
};

export default Wishlist;