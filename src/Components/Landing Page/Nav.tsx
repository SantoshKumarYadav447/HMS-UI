"use client";
import React from 'react';

// Import Bootstrap CSS and JS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Nav() {
    return (
        <>
            {/* Header Section */}
            <div className="container-fluid py-2 bg-primary text-white text-center">
                <div className="row align-items-center text-center mx-5 ">
                    {/* Email Section */}
                    <div className="col-md-4 mb-2 mb-md-0">
                        <i className="bi bi-envelope-fill me-2"></i>
                        <a className="text-decoration-none text-white" href="mailto:support@novena.com">
                            support@novena.com
                        </a>
                    </div>

                    {/* Address Section */}
                    <div className="col-md-4 mb-2 mb-md-0">
                        <i className="bi bi-geo-alt-fill me-2"></i>
                        <span>Address Ta-134/A, New York, USA</span>
                    </div>

                    {/* Call Section */}
                    <div className="col-md-4">
                        <i className="bi bi-telephone-fill me-2"></i>
                        <a className="text-decoration-none text-white" href="tel:+823456513456">
                            Call Now: 823-4565-13456
                        </a>
                    </div>
                </div>
            </div>

            {/* Navbar Section */}
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand mx-5 fs-4" href="#">
                            <img src='./logo.png'/>
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto fs-5 mx-5">
                                <li className="nav-item">
                                    <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="services">Services</a>
                                </li>

                                {/* Department Dropdown */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-dark"
                                        href="#"
                                        id="departmentDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Department
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="departmentDropdown">
                                        <li><a className="dropdown-item" href="departments">departments</a></li>
                                        <li><a className="dropdown-item" href="dtmsingle">dtmsingle</a></li>
                                        </ul>
                                </li>

                                {/* Doctors Dropdown */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle text-dark"
                                        href="#"
                                        id="doctorsDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Doctors
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="doctorsDropdown">
                                        <li><a className="dropdown-item" href="doctors">Doctors</a></li>
                                        <li><a className="dropdown-item" href="drsingle">Doctor Single</a></li>
                                        <li><a className="dropdown-item" href="appointment">Appointment</a></li>
                                    </ul>
                                </li>

                                {/* Blog Dropdown */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle  text-dark"
                                        href="#"
                                        id="blogDropdown"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                                        <li><a className="dropdown-item" href="blogsidebar">Blog with Sidebar</a></li>
                                        <li><a className="dropdown-item" href="blogsingle">Blog Single</a></li>
                                       </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="contact">Contact</a>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="login">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark" href="#">Registration</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark mx-5" href="adminlayout">Admin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
