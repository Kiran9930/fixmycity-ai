import { FaCity } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
       <Link
  to="/"
  className="flex items-center gap-3"
>
          <FaCity className="text-3xl text-blue-600" />
          <h1 className="text-2xl font-bold text-blue-600">
            FixMyCity AI
          </h1>
       </Link>

        {/* Menu */}
       <ul className="flex items-center gap-10 font-medium text-gray-700">

  <li>
    <Link
      to="/"
      className="hover:text-blue-600 transition"
    >
      Home
    </Link>
  </li>

  <li className="cursor-pointer hover:text-blue-600 transition">
    Features
  </li>

  <li>
    <Link
      to="/dashboard"
      className="hover:text-blue-600 transition"
    >
      Dashboard
    </Link>
  </li>

  <li className="cursor-pointer hover:text-blue-600 transition">
    Contact
  </li>

</ul>
      </div>
    </nav>
  );
}

export default Navbar;