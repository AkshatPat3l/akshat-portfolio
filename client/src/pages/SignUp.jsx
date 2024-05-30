import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      {/* Sign-Up Container */}
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left Side */}
        <div className="flex-1">
          <Link to="/" className="text-4xl font-bold dark:text-white">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              Akshat's
            </span>
            Portfolio
          </Link>
          <p className="text-sm mt-5">Please Sign Up to view my portfolio</p>
        </div>

        <div className="div"></div>
        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            {/* Username Input */}
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            {/* Email Input */}
            <div>
              <Label value="Your Email" />
              <TextInput type="text" placeholder="name@company.com" id="email" />
            </div>
            {/* Password Input */}
            <div>
              <Label value="Your Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>
            {/* Submit Button */}
            <Button gradientDuoTone="purpleToPink" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span> Have an account?</span>
            <Link to="/sign-in" className="text-blue-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
