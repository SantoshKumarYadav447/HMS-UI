"use client";
import React from "react";

export default function Footer() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-5">
                        <img src="./home_files/logo.png" />
                        <p className="mt-4">
                            The main issue in your code is that you're attempting to use an import statement inside the component's JSX, which isn't valid.
                            Imports must be declared at the top of the file, outside of any components or functions.
                        </p>
                        <span className="fs-1">
                            <i className="bi bi-facebook rounded-5"></i>
                            <i className="bi bi-twitter ms-4 rounded-5"></i>
                            <i className="bi bi-linkedin ms-4 rounded-5"></i>
                        </span>
                    </div>
                    <div className="col-sm-2">
                        <h3>Department</h3>
                        <i className="bi bi-dash-lg fs-1 text-danger"></i>
                        <ul className="list-unstyled"> 
                            <li>Surgery</li>
                            <li>Women`s Health</li>
                            <li>Radiology</li>
                            <li>Cardioc</li>
                            <li>Medicine</li>
                        </ul>
                    </div>
                    <div className="col-sm-2">
                        <h3>Support</h3>
                        <i className="bi bi-dash-lg fs-1 text-danger"></i>
                        <ul className="list-unstyled">
                            <li>Terms & Conditions</li>
                            <li>Privacy Policy</li>
                            <li>Company Support</li>
                            <li>FAQuestions</li>
                            <li>Company Licence</li>
                        </ul>
                    </div>
                    <div className="col-sm-3">
                        <h3>Get In Touch</h3>
                        <i className="bi bi-dash-lg fs-1 text-danger"></i>
                        <ul className="list-unstyled"> 
                            <span className="fs-5">
                                <i className="bi bi-envelope-fill"></i> Support Available for 24/7
                            </span>
                            <li className="fs-3">Support@email.com</li>
                            <span className="fs-5">
                                <i className="bi bi-person-fill"></i> Mon to Fri:08:30-18:00
                                <li className="fs-3">+23-456-6588</li>
                            </span>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                <div className="col-sm-6">
                &copy;   Copyright Reaserved to Novena by <b>Themefisher</b>
                </div>
                <div className="col-sm-6">
                <div className="container mx-auto px-6 mt-6 flex justify-center">
        
                <div className="container mx-auto px-6 mt-6 flex justify-center">

        <div className="flex w-full max-w-md border rounded-5 overflow-hidden">
          <input
            type="text"
            placeholder="Yuor Email address..."
            className="p-2 w-full border-none outline-none form-control"
          />
         
        </div>
      </div>
      </div>
                </div>
                </div>
     <div className="container bg-gray-100 py-16 px-4 md:px-16 text-center mt-4">

       <p>Distributed by <b>Themewagon</b></p>
        </div>
            </div>
        </>
    );
}