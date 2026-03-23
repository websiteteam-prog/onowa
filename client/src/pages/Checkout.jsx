import { useState, useEffect } from "react";

const Checkout = () => {

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);

  }, []);

  const [user, setUser] = useState({
    name: "Ajay Kumar",
    address: "Aliganj, Lucknow",
    city: "Lucknow, Uttar Pradesh - 226024",
    phone: "8572918610",
    email: "ajay@gmail.com",
  });

  const [showModal, setShowModal] = useState(false);

  const [newAddress, setNewAddress] = useState(user.address);

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = cartItems.length ? 120 : 0;

  const total = subtotal + shipping;

  const updateAddress = () => {
    setUser({ ...user, address: newAddress });
    setShowModal(false);
  };

  return (

    <div className="bg-[#f3ede4] min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-semibold mb-12">
          Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            {/* ADDRESS */}

            <div className="bg-white p-8 rounded-2xl shadow-md border">

              <div className="flex justify-between mb-6">

                <h2 className="text-xl font-semibold">
                  Delivery Address
                </h2>

                <button
                  onClick={() => setShowModal(true)}
                  className="text-red-500 font-medium"
                >
                  Change
                </button>

              </div>

              <div className="bg-gray-50 p-6 rounded-xl border">

                <p className="font-semibold text-lg">
                  {user.name}
                </p>

                <p className="text-gray-600">
                  {user.address}
                </p>

                <p className="text-gray-600">
                  {user.city}
                </p>

                <p className="mt-3 text-gray-600">
                  📞 {user.phone}
                </p>

                <p className="text-gray-600">
                  ✉ {user.email}
                </p>

              </div>

            </div>

          </div>

          {/* ORDER SUMMARY */}

          <div className="bg-white p-8 rounded-2xl shadow-md border h-fit">

            <h2 className="text-xl font-semibold mb-6">
              Order Summary
            </h2>

            <div className="space-y-5">

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="flex items-center justify-between"
                >

                  <div className="flex items-center gap-3">

                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-lg object-cover"
                    />

                    <div>

                      <p className="text-sm font-medium">
                        {item.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        Qty: {item.qty}
                      </p>

                    </div>

                  </div>

                  <p className="font-medium">
                    ₹{item.price * item.qty}
                  </p>

                </div>

              ))}

            </div>

            <div className="border-t my-6"></div>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

            </div>

            <button className="w-full mt-8 bg-red-500 hover:bg-red-600 transition text-white py-3 rounded-xl font-medium">
              Pay Now
            </button>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Checkout;