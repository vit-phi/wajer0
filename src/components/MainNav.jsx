import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { ChevronDown, Menu, X } from "lucide-react";

function MainNav() {
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            CAI I.T. SHOP
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Links (Hidden in Mobile, Shown in Desktop) */}
          <div className={`md:flex gap-6 items-center ${isMenuOpen ? "block absolute top-16 left-0 w-full bg-white shadow-md p-4 z-50" : "hidden md:flex"}`}>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
              }
              to="/shop"
            >
              Shop
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
              }
              to="/cart"
            >
              Cart
              {carts.length > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {carts.length}
                </span>
              )}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
              }
              to="/about"
            >
              About
            </NavLink>

            {/* User Section */}
            {user ? (
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-2 hover:bg-gray-200 px-2 py-3 rounded-md"
                >
                  <img
                    className="w-8 h-8"
                    src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                    alt="User Avatar"
                  />
                  <ChevronDown />
                </button>

                {isOpen && (
                  <div className="absolute top-12 bg-white shadow-md z-50 w-32">
                    <Link
                      to="/user/history"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      History
                    </Link>
                    <button
                      onClick={logout}
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                      : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
                  }
                  to="/register"
                >
                  Register
                </NavLink>

                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                      : "hover:bg-slate-200 px-3 py-2 rounded-md text-sm font-medium"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
