import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { ChevronDown, ShoppingCart, User } from "lucide-react";

function MainNav() {
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg fixed w-full z-50 top-0 left-0 border-b border-gray-300">
      <div className="container mx-auto px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Brand */}
        <Link to="/" className="text-3xl font-extrabold text-gray-900 tracking-wide hover:text-gray-700 transition">
          Tast
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {[
            { name: "Home", path: "/" },
            { name: "Shop", path: "/shop" },
            { name: "About", path: "/about" },
          ].map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-lg font-medium px-5 py-2 rounded-lg transition-all ${
                  isActive ? "bg-gray-300 text-gray-900 shadow-sm" : "hover:bg-gray-200 text-gray-700"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Cart & User Section */}
        <div className="flex items-center gap-6">
          {/* Cart Icon */}
          <NavLink to="/cart" className="relative">
            <ShoppingCart className="w-7 h-7 text-gray-700 hover:text-gray-900 transition transform hover:scale-110" />
            {carts.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full animate-bounce">
                {carts.length}
              </span>
            )}
          </NavLink>

          {/* User Dropdown */}
          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 transition-all"
              >
                <User className="w-6 h-6 text-gray-700" />
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200">
                  <Link to="/user/history" className="block px-4 py-3 hover:bg-gray-100 transition">
                    Order History
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-3 hover:bg-gray-100 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <NavLink
                to="/register"
                className="px-5 py-2 text-lg font-medium text-gray-700 hover:text-gray-900 transition-all"
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className="px-5 py-2 text-lg font-medium bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all"
              >
                Login
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
