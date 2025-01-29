import React, { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { ChevronDown, Sun, Moon } from "lucide-react"; // ✅ ใช้ไอคอนธีม
import { ThemeContext } from "../context/ThemeContext"; // ✅ ใช้งานธีม

function MainNav() {
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);

  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext); // ✅ ดึงค่าธีม

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md transition-all">
      <div className="mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          {/* โลโก้ */}
          <div className="flex items-center gap-6">
            <Link to={"/"} className="text-2xl font-bold text-gray-900 dark:text-white">
              CAI I.T. SHOP
            </Link>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white"
              }
              to={"/"}
            >
              Home
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white"
              }
              to={"/shop"}
            >
              Shop
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white"
              }
              to={"/cart"}
            >
              Cart
              {carts.length > 0 && (
                <span className="absolute top-0 bg-red-500 rounded-full px-2 text-white">
                  {carts.length}
                </span>
              )}
            </NavLink>

            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                  : "hover:bg-slate-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white"
              }
              to={"/about"}
            >
              About
            </NavLink>
          </div>

          {/* ปุ่มเปลี่ยนธีม */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>

          {/* User section */}
          {user ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center gap-2 hover:bg-gray-200 dark:hover:bg-gray-700 px-2 py-3 rounded-md"
              >
                <img
                  className="w-8 h-8"
                  src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                  alt="User Avatar"
                />
                <ChevronDown />
              </button>

              {isOpen && (
                <div className="absolute top-16 right-0 bg-white dark:bg-gray-800 shadow-md z-50 rounded-md">
                  <Link
                    to={"/user/history"}
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    History
                  </Link>
                  <button
                    onClick={() => logout()}
                    className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 w-full text-gray-900 dark:text-white"
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
                    ? "bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-slate-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white"
                }
                to={"/register"}
              >
                Register
              </NavLink>

              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-gray-200 dark:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
                    : "hover:bg-slate-200 dark:hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-gray-900 dark:text-white"
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
