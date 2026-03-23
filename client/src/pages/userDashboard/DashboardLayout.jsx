import { Outlet } from "react-router-dom";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="flex">

      <DashboardSidebar />

      <div className="flex-1 bg-gray-50 min-h-screen">

        <div className="bg-white p-5 border-b">
          Welcome,
          <span className="text-red-600 font-semibold ml-2">
            {user?.name || "User"}
          </span>
        </div>

        <div className="p-8">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default DashboardLayout;