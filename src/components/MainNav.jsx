import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useEcomStore from "../store/ecom-store";
import { ChevronDown, ShoppingCart } from "lucide-react";

function MainNav() {
  const carts = useEcomStore((s) => s.carts);
  const user = useEcomStore((s) => s.user);
  const logout = useEcomStore((s) => s.logout);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
          Tast
        </Link>

        {/* Navbar Toggler for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link px-3 py-2"
                to="/"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3 py-2"
                to="/shop"
                activeClassName="active"
              >
                Shop
              </NavLink>
            </li>
            <li className="nav-item position-relative">
              <NavLink className="nav-link px-3 py-2" to="/cart">
                <ShoppingCart className="me-1" />
                Cart
                {carts.length > 0 && (
                  <span className="badge rounded-pill bg-danger position-absolute top-0 end-0 translate-middle">
                    {carts.length}
                  </span>
                )}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link px-3 py-2"
                to="/about"
                activeClassName="active"
              >
                About
              </NavLink>
            </li>
          </ul>

          {/* User Section */}
          <ul className="navbar-nav">
            {user ? (
              <li className="nav-item dropdown">
                <button
                  className="btn btn-light rounded-pill d-flex align-items-center"
                  onClick={toggleDropdown}
                >
                  <img
                    src="https://cdn.iconscout.com/icon/free/png-512/free-avatar-icon-download-in-svg-png-gif-file-formats--user-professor-avatars-flat-icons-pack-people-456317.png?f=webp&w=256"
                    alt="User Avatar"
                    className="rounded-circle me-2"
                    width="32"
                    height="32"
                  />
                  <ChevronDown />
                </button>

                {isOpen && (
                  <ul className="dropdown-menu dropdown-menu-end show">
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/user/history"
                        onClick={() => setIsOpen(false)}
                      >
                        History
                      </Link>
                    </li>
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={logout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-outline-success rounded-pill px-4 mx-2"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="btn btn-primary rounded-pill px-4"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
