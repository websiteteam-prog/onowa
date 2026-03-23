const DashboardHome = () => {

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-4 gap-6">

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Total Orders</p>
          <h2 className="text-2xl font-bold">8</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Pending Orders</p>
          <h2 className="text-2xl font-bold">1</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Wishlist Items</p>
          <h2 className="text-2xl font-bold">5</h2>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <p className="text-gray-500">Support Tickets</p>
          <h2 className="text-2xl font-bold">2</h2>
        </div>

      </div>

    </div>
  );
};

export default DashboardHome;