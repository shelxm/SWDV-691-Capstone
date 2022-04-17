import React, { useState } from 'react';
import { NavDropdown } from 'bootstrap';

const Header = () => {
  return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/foodtrucks">Food Trucks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                    <a className="navbar-brand fw-bolder fs-4 mx-auto" href="/">Food Trucks Nearby</a>
                    <a href="/login" className="btn btn-outline-primary ms-auto px-4 rounded-pill" role="button">Login</a>
                    <a href="/register" className="btn btn-outline-primary ms-auto px-4 rounded-pill" role="button">Register</a>
                </div>
            </nav>
        </div>
  );
}

export default Header;
