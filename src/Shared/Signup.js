import React from 'react';
import { useForm } from "react-hook-form";
import googleLogo from '../assets/Images/googleLogo.png';
import { useSignInWithEmailAndPassword,useCreateUserWithEmailAndPassword,useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { toast } from 'react-toastify';

const Signup = () => {
  // signin with email
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  // Create account
  const [
    createUserWithEmailAndPassword,
    createUser,
    createUoading,
    createRrror,
  ] = useCreateUserWithEmailAndPassword(auth);
  // Update Profile
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async(data) => {
    console.log(data)
    await signInWithEmailAndPassword(data.email,data.password)
    await updateProfile({displayName: data.name})
    toast.success('Account Created Successfully');
  };

  return (
    <div class="flex justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl uppercase font-bold mb-2">Signup</h2>
    <form  onSubmit={handleSubmit(onSubmit)} class="grid grid-cols-1">

    {/* Name Input */}
        <div class="form-control w-full max-w-xs">
          <label class="label">
          <span class="label-text">Name</span>
          </label>
          <input {...register("name", {
                required : {
                  value: true,
                  message: '⚠️ Name is required' // JS only: <p>error message</p> TS only support string
                }
            })} type="text" placeholder="Email" class="input input-bordered w-full max-w-xs" />
          <label class="label">
            {/* Error msg  */}
            { errors.name?.type === 'required' && <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
            }
          </label>
        </div>
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
      <input type="submit" value="login" class="btn mt-4" />
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

export default Signup;