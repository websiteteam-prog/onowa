const Orders = () => {

  return (
    <div>

      <h1 className="text-2xl font-bold mb-6">
        My Orders
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="border-b">
          <tr>
            <th className="p-3">Product</th>
            <th className="p-3">Price</th>
            <th className="p-3">Qty</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>

          <tr className="border-b">
            <td className="p-3">Bags</td>
            <td className="p-3">₹8999</td>
            <td className="p-3">1</td>
            <td className="p-3 text-yellow-600">Pending</td>
          </tr>

        </tbody>

      </table>

    </div>
  );
};

export default Orders;