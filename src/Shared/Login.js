import React from 'react';
import { useForm } from "react-hook-form";
import googleLogo from '../assets/Images/googleLogo.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';

const Login = () => {
  // signin with email
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    signInWithEmailAndPassword(data.email,data.password);
    toast.success('Login Successfully');
  };

  return (
    <div class="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl uppercase font-bold mb-2">login</h2>
    <form  onSubmit={handleSubmit(onSubmit)} class="grid grid-cols-1">

    {/* Email Input */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
          <span class="label-text">Email</span>
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

            })} type="email" placeholder="Email" class="input input-bordered w-full max-w-xs" />
          <label class="label">
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
        <div class="form-control w-full max-w-xs">
          <label class="label">
          <span class="label-text">Password</span>
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
            })} type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" />
          <label class="label">
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
        </div>
        {/* Login button */}
      <input type="submit" value="login" class="btn" />
        <div className="divider">OR</div>
        <div className='flex items-center justify-center btn btn-outline'>
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