import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const Passwordvalidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    const onSubmit = (data) => {
      if(data.password === Passwordvalidation)
           {
             console.log('Password is not valid')
           }

       console.log(data)
    }
    return (
        <div className="Form">
        <h1>Login</h1>
        <div className="inputs">
        <form onSubmit={handleSubmit(onSubmit)} className="p-3 ms-auto me-auto w-50">
                            
                            <input type='email' name="email" className="form-control mt-3" placeholder="Your Email" {...register("email",{ required: true })} />
                            {errors.email && <span><p className='text-danger'>Email  is required</p></span>}
                            <input type='password' name="password" className="form-control mt-3" placeholder="Your Password" {...register("password",{ required: true })} />
                            {errors.email && <span><p className='text-danger'>Password is required</p></span>}
                            <div className="d-flex flex-row bd-highlight mb-3">

                            <button type="Submit" className="btn btn-dark mt-2">Submit</button>

                            </div>
                        </form>
        </div>
      </div>
    );
};

export default Login;