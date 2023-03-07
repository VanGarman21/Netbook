import React from "react";
import { useForm } from "react-hook-form";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUserCircle,
} from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineLoading } from "react-icons/ai";

interface SignUpFormInputs {
  username: string;
  email: string;
  password: string;
}

const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormInputs>();

  const onSubmit = (data: SignUpFormInputs) => {
    console.log(data);
  };

  const handleGoogleSignup = async () => {
    try {
      const response = await fetch(
        "https://yourbackend.com/api/google_signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // your request body data
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      const response = await fetch(
        "https://yourbackend.com/api/facebook_signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // your request body data
          }),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold text-center mb-8">SignUp</h1>
          <div className="mb-4">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineUserCircle className="text-gray-500" />
              </div>
              <input
                type="text"
                id="username"
                placeholder="Username"
                className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
                {...register("username", {
                  required: "Username is required",
                })}
              />
            </div>
            {errors.username && (
              <span className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineMail className="text-gray-500" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineLockClosed className="text-gray-500" />
              </div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="repeat-password" className="sr-only">
              Repeat Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiOutlineLockClosed className="text-gray-500" />
              </div>
              <input
                type="password"
                id="repeat-password"
                placeholder="Repeat Password"
                className={`w-full pl-10 pr-3 py-2 rounded-lg border-2 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-500 text-white rounded-lg py-2 mb-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="mr-2">
                  <AiOutlineLoading className="animate-spin" />
                </span>
                <span>Loading</span>
              </>
            ) : (
              "SignUp"
            )}
          </button>
          <div className="flex items-center justify-between">
            <div className="border-b border-gray-300 w-1/5"></div>
            <div className="text-gray-500 mx-4">or sign in with</div>
            <div className="border-b border-gray-300 w-1/5"></div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4">
              <FaFacebook className="inline-block mr-2" />
              Facebook
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
              <FcGoogle className="inline-block mr-2" />
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
