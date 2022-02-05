import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'
import './Login.css'

const Login = () => {
  const {user, signInWithGoogle, loginWithEmailPassword} = useAuth()
     let navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }} = useForm();
    const Passwordvalidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    const onSubmit = (data) => {
      if(data.password === Passwordvalidation)
           {
             console.log('Password is not valid')
           }
          console.log(data)
       loginWithEmailPassword(data)
  
    }
    if(user?.email){
      navigate("/")  
  }

    return (
        <div className="Form1">
        <h1>Login</h1>
        <div className="inputs">
        <form  onSubmit={handleSubmit(onSubmit)} className="p-3 ms-auto me-auto w-50 hookform">
                            
                            <input type='email' name="email" className="form-control mt-3" placeholder="Your Email" {...register("email",{ required: true })} />
                            {errors.email && <span><p className='text-danger'>Email  is required</p></span>}
                            <input type='password' name="password" className="form-control mt-3" placeholder="Your Password" {...register("password",{ required: true })} />
                            {errors.email && <span><p className='text-danger'>Password is required</p></span>}
                            <div className="d-flex flex-row bd-highlight mb-3">

                            <button type="Submit" className="btn btn-success mt-2 px-3 py-2 mx-auto">Login</button>
                            <br /> 

                            </div>
                        </form>
                        <div className='hookform'>
                       <span> <p>Haven't any account? </p></span><Link to='/registration' className=''>Register</Link>
                        <br /><br />
                        <button onClick={signInWithGoogle} className='btn btn-warning'>Sign In with Google</button>
                        </div>
        </div>
      </div>
    );
};

export default Login;