import { FaBell, FaUserCircle } from "react-icons/fa";

function DashboardNavbar() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 flex justify-between items-center">

      <div>
        <h2 className="text-3xl font-bold">
          Dashboard
        </h2>

        <p className="text-gray-500">
          Welcome back 👋
        </p>
      </div>

      <div className="flex gap-6 items-center">

        <FaBell className="text-2xl cursor-pointer"/>

        <FaUserCircle className="text-4xl text-blue-600"/>

      </div>

    </div>
  );
}

export default DashboardNavbar;