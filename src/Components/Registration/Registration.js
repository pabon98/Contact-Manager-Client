import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Registration.css'

const Registration = () => {
  let navigate = useNavigate()
const{signUpWithEmailPassword, user} = useAuth()
    const { register, handleSubmit, formState: { errors }} = useForm();
    const Passwordvalidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    const onSubmit = (data) => {
      if(data.password === Passwordvalidation)
           {
             console.log('Password is not valid')
           }
       console.log(data)
       signUpWithEmailPassword(data)
    }
    if(user?.email){
      navigate("/")  
  }
    

    return (
        <div className="Form2">
        <h1>Registration</h1>
        <div className="inputs">
        <form onSubmit={handleSubmit(onSubmit)} className="p-3 ms-auto me-auto w-50 hookform2">
                            <input type='text' name="name"  className="form-control" placeholder="Full Name" {...register("name",{ required: true })} />
                            {errors.name && <span><p className='text-danger'>Name is required</p></span>}

                            <input type='email' name="email" className="form-control mt-3" placeholder="Your Email" {...register("email",{ required: true })} />
                            {errors.email && <span><p className='text-danger'>Email  is required</p></span>}
                            <input type='password' name="password" className="form-control mt-3" placeholder="Your Password" {...register("password",{ required: true })} />
                            {errors.email && <span><p className='text-danger'>Password is required</p></span>}
                            <div className="d-flex flex-row bd-highlight mb-3">

                            <button type="Submit" className="btn btn-warning px-3 py-2 mt-3 mx-auto">Registration</button>

                            </div>
                        </form>
                      <div className='hookform2'>
                      <span><p>Already have an account</p></span> <Link className='btn btn-dark' to='/login'>Login</Link>
                      </div>
        </div>
      </div>
    );
};

export default Registration;