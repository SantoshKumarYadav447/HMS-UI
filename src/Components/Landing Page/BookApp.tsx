"use client";
import React from "react";

export default function BookApp(){
    
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-5">
          <img src="./about/img-3.png" className="img-fluid"/>
        </div>
        <div className="col-sm-7 p-5">
          <h1 className="px-5">Book Appointment</h1>
          <p className="px-5">Curious which components explicitly require our JavaScript and Popper? If you’re at all unsure about the general page structure, keep reading for an example page template.</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-100 p-3 rounded-lg px-5">
          <div className="row">
            <div className="col-sm-6">
            <select className="border mb-3 p-3 rounded form-control ">
            <option>Choose Department</option>
          </select>
          <input type="date" className="border mb-3 p-3 rounded form-control" placeholder="dd/mm/yyyy" />
          <input type="text" className="border mb-3 p-3 rounded form-control " placeholder="Full Name" />
          
            
            </div>
            <div className="col-sm-6">
            <select className="border mb-3 p-3 rounded form-control">
            <option>Select Doctors</option>
          </select>
          <input type="time" className="border mb-3 p-3 rounded  form-control" placeholder="Time" />
          <input type="tel" className="border mb-3 p-3 rounded form-control " placeholder="Phone Number" />
           </div>
            
            </div> 
            <textarea className="border mb-3 p-3 rounded col-span-2 form-control" placeholder="Your Message"></textarea>
          </form>
          <span className="px-5">
          <button className=" bookbtn text-white px-5 py-3 mb-2 rounded-5 "> MAKE APPOINTMENT    <i className="bi bi-caret-right"></i></button>
          <a href="#" className="btn btn-danger btn-lg rounded rounded-5 bookarrowb"><i className="bi bi-arrow-up"></i> </a>

          </span>
        </div>
      </div>
    </div>
  );
}

   