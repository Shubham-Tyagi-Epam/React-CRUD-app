/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-light fs-5">
      <div className="container-fluid">
        <div>
          <NavLink to="/" className="navbar-brand">
            CRUD
          </NavLink>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className={(navData) =>
                  navData.isActive
                    ? "active bg-secondary rounded nav-link"
                    : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={(navData) =>
                  navData.isActive
                    ? "active bg-secondary rounded nav-link"
                    : "nav-link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "active bg-secondary rounded nav-link "
                    : "nav-link"
                }
                activeClassName="active bg-secondary rounded nav-link "
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
