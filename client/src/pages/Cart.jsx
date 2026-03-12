import { useState } from "react";
import { Trash2 } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "RSR04 Dynamaster Rain Suit",
      price: 3999,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=400",
    },
    {
      id: 2,
      name: "Motorbike Helmet Pro",
      price: 2599,
      qty: 1,
      image:
        "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=400",
    },
    {
      id: 3,
      name: "Rider Gloves Premium",
      price: 999,
      qty: 2,
      image:
        "https://images.unsplash.com/photo-1621274147745-f8d32f90e2d6?w=400",
    },
  ]);

  const increase = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const remove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = cartItems.length ? 120 : 0;

  const total = subtotal + shipping;

  return (
    <div className="bg-[#f3ede4] min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-12">
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-32 bg-white rounded-2xl shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">
              Your cart is empty 🛒
            </h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added anything yet.
            </p>
            <button className="bg-red-500 text-white px-8 py-3 rounded-xl">
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">

            {/* CART ITEMS */}

            <div className="lg:col-span-2 space-y-6">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-6 rounded-2xl shadow-sm border"
                >

                  <div className="flex items-center gap-6">

                    <img
                      src={item.image}
                      className="w-24 h-24 rounded-xl object-cover"
                    />

                    <div>

                      <h3 className="font-semibold text-lg">
                        {item.name}
                      </h3>

                      <p className="text-red-500 font-semibold mt-1">
                        ₹{item.price}
                      </p>

                    </div>
                  </div>

                  {/* QUANTITY */}

                  <div className="flex items-center gap-6">

                    <div className="flex items-center border rounded-lg overflow-hidden">

                      <button
                        onClick={() => decrease(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="px-4 font-medium">
                        {item.qty}
                      </span>

                      <button
                        onClick={() => increase(item.id)}
                        className="px-3 py-1 hover:bg-gray-100"
                      >
                        +
                      </button>

                    </div>

                    <button
                      onClick={() => remove(item.id)}
                      className="text-red-500 hover:text-red-600"
                    >
                      <Trash2 size={20} />
                    </button>

                  </div>

                </div>
              ))}
            </div>

            {/* ORDER SUMMARY */}

            <div className="bg-white p-8 rounded-2xl shadow-sm border h-fit">

              <h2 className="text-2xl font-semibold mb-6">
                Order Summary
              </h2>

              <div className="space-y-3">

                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹{shipping}</span>
                </div>

                <div className="border-t pt-4 flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

              </div>

              <button className="w-full mt-8 bg-red-500 hover:bg-red-600 transition text-white py-3 rounded-xl font-medium">
                Proceed To Checkout
              </button>

            </div>

          </div>
        )}

      </div>

    </div>
  );
};

export default Cart;