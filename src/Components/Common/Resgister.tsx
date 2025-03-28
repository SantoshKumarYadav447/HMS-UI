"use client";
import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from 'axios';
import Swal from 'sweetalert2';

const Schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(4).max(8),
  gender: yup.string().required('Gender is required'),
  age: yup.number().required('Age is required').min(18, 'You must be at least 18 years old').max(100, 'Age must be under 100'),
  contact: yup.string().required('Contact number is required').matches(/^[0-9]{10}$/, 'Contact number must be a 10 digit number')
});

export default function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(Schema)
  });

  const handleRegister = async (data: any) => {
    try {
      const response = await axios.post('/user-registration', data);
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'You have registered successfully!',
      });
    } catch (error) {
      console.error('Error registering user:', error);
      Swal.fire({
        icon: 'error',
        title: 'Registration Failed',
        text: 'Please try again',
      });
    }
  };

  return (
    <>
      <div className="container-fluid login">
        <div className="row in d-flex justify-content-center align-items-center vh-100">
          <div className="col-sm-5 p-4 mx-auto border border-1 rounded-3 form">
            <h2 className="mb-2 text-center">Register</h2>
            <form onSubmit={handleSubmit((d) => handleRegister(d))}>
              <span>Name</span>
              <input type="text" {...register("name")} className="form-control mb-2" placeholder="Enter Your name" />
              {errors.name && <p className="text-danger mb-2">{errors.name.message}</p>}
              
              <span>Email</span>
              <input type="text" {...register("email")} className="form-control mb-2" placeholder="Enter Your Email" />
              {errors.email && <p className="text-danger mb-2">{errors.email.message}</p>}
              
              <span>Contact Number</span>
              <input type="text" {...register("contact")} className="form-control mb-2" placeholder="Enter Your Contact Number" />
              {errors.contact && <p className="text-danger mb-2">{errors.contact.message}</p>}
              
              <span>Password</span>
              <input type="password" {...register("password")} className="form-control mb-2" placeholder="Enter Your Password" />
              {errors.password && <p className="text-danger mb-2">{errors.password.message}</p>}
              
              <div className="row">
                <div className="col-6">
                  <span>Gender</span>
                  <select {...register("gender")} className="form-control mb-2">
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.gender && <p className="text-danger mb-2">{errors.gender.message}</p>}
                </div>
                <div className="col-6">
                  <span>Age</span>
                  <input type="number" {...register("age")} className="form-control mb-2" placeholder="Enter Your Age" />
                  {errors.age && <p className="text-danger mb-2">{errors.age.message}</p>}
                </div>
              </div>
              <input type="submit" value="Register" className="w-100 mt-4 my-2 form-control border-0 mybtncolor" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
