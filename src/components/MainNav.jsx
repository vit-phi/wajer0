import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { ChevronDown, Menu, X, Sun, Moon, LogIn, UserPlus } from "lucide-react";

function MainNav() {
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);

  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 dark:from-gray-900 dark:to-gray-800 shadow-lg">
      <div className="mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-3xl font-bold text-white dark:text-gray-300 tracking-wide"
            >
              Tast
            </Link>
            <button
              onClick={toggleMenu}
              className="md:hidden text-white dark:text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <div className={`${isMenuOpen ? "flex" : "hidden"} md:flex flex-col md:flex-row absolute md:relative bg-white dark:bg-gray-800 w-full md:w-auto top-16 left-0 md:top-0 md:left-auto z-50 md:z-auto shadow-lg md:shadow-none rounded-lg md:rounded-none transition-all duration-300 ease-in-out`}>
            {["Home", "Shop", "Cart", "About"].map((item) => (
              <NavLink
                key={item}
                className={({ isActive }) =>
                  isActive
                    ? "bg-pink-500 dark:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                    : "hover:bg-pink-400 hover:text-white dark:hover:bg-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                }
                to={`/${item.toLowerCase()}`}
              >
                {item}
              </NavLink>
            ))}
          </div>

          <button
            onClick={toggleDarkMode}
            className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-500"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  alt="User Avatar"
                />
                <ChevronDown />
              </button>
              {isOpen && (
                <div className="absolute top-12 right-0 bg-white dark:bg-gray-700 shadow-lg rounded-lg py-2 w-40 z-50">
                  <Link to="/user/history" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-pink-500 dark:hover:bg-gray-600 hover:text-white transition-all duration-300">
                    History
                  </Link>
                  <button onClick={logout} className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white transition-all duration-300">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <NavLink to="/login" className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:from-green-500 hover:to-blue-600">
                <LogIn size={18} /> Login
              </NavLink>
              <NavLink to="/signup" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:from-yellow-500 hover:to-orange-600">
                <UserPlus size={18} /> Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
