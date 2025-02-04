import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { ChevronDown } from "lucide-react";

function MainNav() {
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Brand */}
          <Link to={"/"} className="text-2xl font-bold text-gray-800 hover:text-gray-600">
            Tast
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Shop", "Cart", "About"].map((item) => (
              <NavLink
                key={item}
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-300 px-4 py-2 rounded-md text-sm font-medium transition"
                    : "text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-medium transition"
                }
                to={`/${item.toLowerCase()}`}
              >
                {item}
                {item === "Cart" && carts.length > 0 && (
                  <span className="ml-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1">
                    {carts.length}
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-gray-300 hover:bg-gray-100 transition"
                >
                  <img
                    className="w-8 h-8 rounded-full border border-gray-300"
                    src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                    alt="User Avatar"
                  />
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </button>

                {isOpen && (
                  <div className="absolute right-0 mt-2 w-44 bg-white shadow-md rounded-md overflow-hidden border border-gray-200 transition-opacity duration-200">
                    <Link
                      to={"/user/history"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      Order History
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-300 px-4 py-2 rounded-md text-sm font-medium transition"
                      : "text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-medium transition"
                  }
                  to={"/register"}
                >
                  Register
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-300 px-4 py-2 rounded-md text-sm font-medium transition"
                      : "text-gray-600 hover:text-gray-800 px-4 py-2 text-sm font-medium transition"
                  }
                  to={"/login"}
                >
                  Login
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
