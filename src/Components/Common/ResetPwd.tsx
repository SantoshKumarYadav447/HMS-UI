"use client";
import React from "react"
import * as yup from "yup"
import { useForm } from "react-hook-form" // Ensure this is correct for the installed version
import { yupResolver } from "@hookform/resolvers/yup"

const Schema = yup.object().shape({
  new_password: yup.string().required().min(4).max(8),
  cunfirm_password: yup.string().required().min(4).max(8),
})

export default function ResetPwd() {
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
           <h2 className="mb-2 text-center">Reset Password</h2>
           <form onSubmit={handleSubmit((d) => handleLogin(d))}>
             <span>New Password</span>
             <input type="password" {...register("new_password")} className="form-control mb-2" placeholder="New Password" />
             {errors.new_password && <p className="text-danger mb-2">{errors.new_password.message}</p>}
             <span>Confirm Password</span>
             <input type="password" {...register("cunfirm_password")} className="form-control mb-2" placeholder="Confirm Password" />
             {errors.cunfirm_password && <p className="text-danger mb-2">{errors.cunfirm_password.message}</p>}

             <input type="submit" value="Reset Password" className="w-100 my-2 mt-4 mb-2 form-control border-0 mybtncolor" />
             </form>
         </div>
       </div>
     </div>
    </>
  )
}
