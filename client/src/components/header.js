import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from "bootstrap";
import authService from "./redux/authService";

const Header = () => {
  const [isLoggedIn, setLogin] = useState();

  useEffect(() => {
    if (window.localStorage.getItem("user") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLoggedIn]);

  console.log(isLoggedIn);

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link center" to="/foodtrucks">
                  Food Trucks
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
          <Link className="navbar-brand fw-bolder fs-4 mx-auto" to="/">
            Food Trucks Nearby
          </Link>
          {!isLoggedIn ? (
            <div>
              <Link
                to="/login"
                className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                role="button"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                role="button"
              >
                Register
              </Link>
            </div>
          ) : (
            <div>
              <Link
                to="/"
                className="btn btn-outline-primary ms-auto px-4 rounded-pill"
                role="button"
                onClick={authService.logout}
              >
                Logout
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
