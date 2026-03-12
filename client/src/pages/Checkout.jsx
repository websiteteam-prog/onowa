import { useState } from "react";

const Checkout = () => {

  const [user, setUser] = useState({
    name: "Ajay Kumar",
    address: "Aliganj, Lucknow",
    city: "Lucknow, Uttar Pradesh - 226024",
    phone: "8572918610",
    email: "ajay@gmail.com",
  });

  const [showModal, setShowModal] = useState(false);

  const [newAddress, setNewAddress] = useState(user.address);

  const cartItems = [
    {
      id: 1,
      name: "RSR04 Dynamaster Rain Suit",
      price: 3999,
      qty: 1,
      image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=200",
    },
    {
      id: 2,
      name: "Motorbike Helmet Pro",
      price: 2599,
      qty: 1,
      image: "https://images.unsplash.com/photo-1611241893603-3c359704e0ee?w=200",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const shipping = 120;
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

            {/* PAYMENT METHOD */}

            <div className="bg-white p-8 rounded-2xl shadow-md border">

              <h2 className="text-xl font-semibold mb-6">
                Payment Method
              </h2>

              <div className="space-y-4">

                <div className="flex items-center justify-between border p-4 rounded-lg">

                  <span>UPI Payment</span>

                  <input type="radio" checked readOnly />

                </div>

                <div className="flex items-center justify-between border p-4 rounded-lg">

                  <span>Credit / Debit Card</span>

                  <input type="radio" />

                </div>

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

      {/* ADDRESS MODAL */}

      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">

          <div className="bg-white p-8 rounded-xl w-[400px]">

            <h3 className="text-xl font-semibold mb-4">
              Change Address
            </h3>

            <textarea
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              className="border p-3 rounded w-full"
              rows="4"
            />

            <div className="flex justify-end gap-4 mt-6">

              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>

              <button
                onClick={updateAddress}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Save
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
};

export default Checkout;