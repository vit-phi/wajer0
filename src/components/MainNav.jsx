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
    <nav className="bg-gradient-to-r from-indigo-500 to-blue-500 shadow-lg">
      <div className="mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Brand และ Hamburger Menu */}
          <div className="flex items-center gap-6">
            <Link to="/" className="text-3xl font-bold text-white tracking-wide">
              Tast
            </Link>
            {/* Hamburger Menu Button (มือถือ) */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* กลุ่มเมนูหลัก */}
          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex flex-col md:flex-row absolute md:relative bg-white md:bg-transparent w-full md:w-auto top-16 left-0 md:top-0 md:left-auto z-50 md:z-auto shadow-lg md:shadow-none rounded-lg md:rounded-none transition-all duration-300 ease-in-out`}
          >
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  : "hover:bg-indigo-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  : "hover:bg-indigo-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              }
              to="/shop"
            >
              Shop
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  : "hover:bg-indigo-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              }
              to="/cart"
            >
              Cart
              {carts.length > 0 && (
                <span className="ml-2 bg-red-600 text-white rounded-full px-2 py-0.5 text-xs">
                  {carts.length}
                </span>
              )}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                  : "hover:bg-indigo-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              }
              to="/about"
            >
              About
            </NavLink>
          </div>

          {/* User section */}
          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  alt="User Avatar"
                />
                <ChevronDown />
              </button>

              {isOpen && (
                <div className="absolute top-12 right-0 bg-white shadow-lg rounded-lg py-2 w-40 z-50">
                  <Link
                    to="/user/history"
                    className="block px-4 py-2 text-gray-700 hover:bg-indigo-500 hover:text-white transition-all duration-300"
                  >
                    History
                  </Link>
                  <button
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-500 hover:text-white transition-all duration-300"
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
                  isActive
                    ? "bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    : "hover:bg-indigo-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                }
                to="/register"
              >
                Register
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    : "hover:bg-indigo-400 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                }
                to="/login"
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
