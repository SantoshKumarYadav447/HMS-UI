"use client";
import React from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form" // Ensure this is correct for the installed version
import { yupResolver } from "@hookform/resolvers/yup"

const Schema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(4).max(8),
  loginType: yup.string().required("Login type is required"),
})

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(Schema),
  })

  const handleLogin = (data: any) => {
    console.log(data)
  }

  return (
    <>
     <div className="container-fluid login">
       <div className="row d-flex justify-content-center align-items-center vh-100">
         <div className="col-sm-5 p-4 mx-auto border border-1 rounded-3 form">
           <h2 className="mb-2 text-center">Login</h2>
           <form onSubmit={handleSubmit((d) => handleLogin(d))}>
             <div className="login-type mb-2">
               <select {...register("loginType")} className="form-select">
                 <option value="-Select Login Type-">userType</option>
                 <option value="Admin">Admin</option>
                 <option value="Patient">Patient</option>
                 <option value="Doctor">Doctor</option>
               </select>
               {errors.loginType && <span className="error">{errors.loginType.message}</span>}
             </div>
             <span>Email</span>
             <input type="text" {...register("email")} className="form-control mb-2" placeholder="Enter Your Email" />
             {errors.email && <p className="text-danger mb-2">{errors.email.message}</p>}
             <span>Password</span>
             <input type="password" {...register("password")} className="form-control mb-2" placeholder="Enter Your Password" />
             {errors.password && <p className="text-danger mb-2">{errors.password.message}</p>}
                <div className="row">
                    <div className="col-6">
                    <a className="nav-link text-primary text-end d-flex justify-content-start align-items-start" href="resetpwd">Forget Password</a>
                    </div>
                    <div className="col-6">
                    <a className="nav-link text-primary text-end d-flex justify-content-end align-items-end" href="forgetpwd">Reset Password</a>
                    </div>
                </div>

             <input type="submit" value="Login" className="w-100 my-2 mt-4 mb-2 form-control border-0 mybtncolor" />
             <a className="nav-link text-end mt-2" href="register">Don't have any Account <span className="text-primary">Register Here    <i className="bi bi-arrow-right-short"></i></span> </a>
           </form>
         </div>
       </div>
     </div>
    </>
  )
}
