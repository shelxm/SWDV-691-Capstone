import React, { useState } from 'react';
import { NavDropdown } from 'bootstrap';

const Header = () => {
  return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/foodtrucks">Food Trucks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">About</a>
                            </li>
                        </ul>
                    </div>
                    <a class="navbar-brand fw-bolder fs-4 mx-auto" href="/">Food Trucks Nearby</a>
                    <button class="btn btn-outline-primary ms-auto px-4 rounded-pill">Login</button>
                    <button class="btn btn-outline-primary ms-auto px-4 rounded-pill">Register</button>
                </div>
            </nav>
        </div>
  );
}

export default Header;
