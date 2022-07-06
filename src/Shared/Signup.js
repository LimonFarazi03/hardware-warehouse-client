import React from "react";
import { useForm } from "react-hook-form";
import googleLogo from "../assets/Images/googleLogo.png";
import {
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  // signing with email
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  // Create account
  const [
    createUserWithEmailAndPassword,
    createUser,
    createUoading,
    createError,
  ] = useCreateUserWithEmailAndPassword(auth);
  // Update Profile
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  // Sign in with Google
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    toast.success("Account Created Successfully");

    // Post User
    fetch("https://safe-savannah-43531.herokuapp.com/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        toast.success("Welcome")
      });
  };
  let allError;
  if (error || createError || updateError || gerror) {
    allError = (
      <p className="text-red-500 text-center mt-4 text-sm">
        ⚠️{" "}
        <small>
          {error?.message ||
            createError?.message ||
            updateError?.message ||
            gerror?.message}
        </small>
      </p>
    );
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl uppercase font-bold mb-2">
            Signup
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1">
            {/* Name Input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "⚠️ Name is required", // JS only: <p>error message</p> TS only support string
                  },
                })}
                type="text"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {/* Error msg  */}
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            {/* Email Input */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "⚠️ Email is required", // JS only: <p>error message</p> TS only support string
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "⚠️ provide a valid email",
                  },
                })}
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {/* Error msg  */}
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
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
              <input
                {...register("password", {
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
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
              />
              <label className="label">
                {/* Error msg  */}
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <p className="mb-2">
                Already have an account{" "}
                <Link to="/login" className="underline text-primary">
                  Login
                </Link>
              </p>
              {allError}
            </div>
            {/* Login button */}
            <input type="submit" value="Signup" className="btn mt-4" />
            <div className="divider">OR</div>
            {/* Google btn */}
            <div
              onClick={() => signInWithGoogle()}
              className="flex items-center justify-center btn btn-outline"
            >
              <img width={"46px"} src={googleLogo} alt="" />
              <p>Connect With Google</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
