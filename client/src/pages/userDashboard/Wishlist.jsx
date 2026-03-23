const Wishlist = () => {

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        My Wishlist
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 shadow rounded">

          <p className="font-semibold">
            Bags
          </p>

          <p className="text-gray-500">
            ₹8999
          </p>

          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>

        </div>

      </div>

    </div>
  );
};

export default Wishlist;