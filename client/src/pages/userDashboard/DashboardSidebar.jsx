import { Link } from "react-router-dom";

const DashboardSidebar = () => {

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  return (
    <div className="w-64 min-h-screen bg-white border-r">

      <div className="p-6 text-2xl font-bold text-red-600">
        MyShop
      </div>

      <ul className="space-y-2 p-4">

        <li>
          <Link to="/dashboard" className="block p-3 hover:bg-red-100 rounded">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/dashboard/orders" className="block p-3 hover:bg-red-100 rounded">
            My Orders
          </Link>
        </li>

        <li>
          <Link to="/dashboard/profile" className="block p-3 hover:bg-red-100 rounded">
            Profile
          </Link>
        </li>

        <li>
          <Link to="/dashboard/wishlist" className="block p-3 hover:bg-red-100 rounded">
            Wishlist
          </Link>
        </li>

        <li>
          <button
            onClick={logout}
            className="w-full text-left p-3 text-red-600 hover:bg-red-100 rounded"
          >
            Logout
          </button>
        </li>

      </ul>

    </div>
  );
};

export default DashboardSidebar;