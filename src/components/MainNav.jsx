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
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={"/"} className="text-2xl font-bold text-blue-600">
            Tast
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {["Home", "Shop", "About"].map((item) => (
              <NavLink
                key={item}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`
                }
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </NavLink>
            ))}

            {/* Cart */}
            <NavLink
              className={({ isActive }) =>
                `relative flex items-center px-4 py-2 rounded-md text-sm font-medium transition ${
                  isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                }`
              }
              to={"/cart"}
            >
              <ShoppingCart className="w-5 h-5" />
              {carts.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {carts.length}
                </span>
              )}
            </NavLink>
          </div>

          {/* User Section */}
          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 hover:bg-gray-200 px-3 py-2 rounded-md transition"
              >
                <User className="w-6 h-6 text-gray-600" />
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-40">
                  <Link
                    to={"/user/history"}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    History
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <NavLink
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition ${
                    isActive ? "bg-green-500 text-white" : "hover:bg-gray-100"
                  }`
                }
                to={"/register"}
              >
                Register
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium transition ${
                    isActive ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`
                }
                to={"/login"}
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
