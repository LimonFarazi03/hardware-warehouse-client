import React from 'react';
import { useForm } from "react-hook-form";
import googleLogo from '../assets/Images/googleLogo.png';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

  let navigate = useNavigate();
  let location = useLocation();
  const [haveuser, haveloading, haveerror] = useAuthState(auth);

  let from = location.state?.from?.pathname || "/";
  // signin with email
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  // Sign in with Google 
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    signInWithEmailAndPassword(data.email,data.password);
  };
  if(user || guser|| haveuser){
    navigate(from, { replace: true });
  }
  let allError;
  if(error || gerror){
    allError = <p className='text-red-500 text-center my-2 text-sm'>⚠️ <small>{error?.message || gerror?.message}</small></p>
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-center text-2xl uppercase font-bold mb-2">login</h2>
    <form  onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1">

    {/* Email Input */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
          <span className="label-text">Email</span>
          </label>
          <input {...register("email", {
                required : {
                  value: true,
                  message: '⚠️ Email is required' // JS only: <p>error message</p> TS only support string
                },
                pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "⚠️ provide a valid email",
                  }

            })} type="email" placeholder="Email" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            {/* Error msg  */}
            { errors.email?.type === 'required' && <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
            }
            {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
          </label>
        </div>
    {/* Password Input */}
        <div className="form-control w-full max-w-xs">
          <label className="label">
          <span className="label-text">Password</span>
          </label>
          <input {...register("password", {
                required: {
                    value: true,
                    message: "⚠️ password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "⚠️ password will be 6 character or long",
                  },
                  pattern: {
                    value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                    message: "⚠️ your password must be strong improve now",
                  },
            })} type="password" placeholder="Password" className="input input-bordered w-full max-w-xs" />
          <label className="label">
            {/* Error msg  */}
            { errors.password?.type === 'required' && <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
            }
            { errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
            }
            { errors.password?.type === 'pattern' && <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
            }
          </label>
            <p className='mb-2'>New in site <Link to='/signup' className='underline text-primary'>Create an account</Link></p>
          {allError}
        </div>
        {/* Login button */}
      <input type="submit" value="login" className="btn" />
        <div className="divider">OR</div>
        {/* Google signIn */}
        <div onClick={()=>signInWithGoogle()} className='flex items-center justify-center btn btn-outline'>
          <img width={'46px'} src={googleLogo} alt="" />
          <p>Connect With Google</p>
        </div>
        <div onClick={()=>signInWithGoogle()} className='mt-3 flex items-center justify-center btn btn-outline'>
          <img width={'46px'} src={googleLogo} alt="" />
          <p>Connect With Google</p>
        </div>
    </form>
  </div>
</div>
    </div>
  );
};

export default Login;