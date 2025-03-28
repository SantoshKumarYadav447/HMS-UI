"use client";
import React from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form" // Ensure this is correct for the installed version
import { yupResolver } from "@hookform/resolvers/yup"

const Schema = yup.object().shape({
  email: yup.string().required().email(),
})

export default function ForgetPwd() {
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
           <h2 className="mb-2 text-center">Forget Password</h2>
           <form onSubmit={handleSubmit((d) => handleLogin(d))}>
             <span>Email</span>
             <input type="text" {...register("email")} className="form-control mb-2" placeholder="Enter Your Email" />
             {errors.email && <p className="text-danger mb-2">{errors.email.message}</p>}
             <input type="submit" value="Send Forget Link" className="w-100 my-2 mt-4 mb-2 form-control border-0 mybtncolor" />
             </form>
         </div>
       </div>
     </div>
    </>
  )
}
