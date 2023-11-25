import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="max-w-lg m-auto p-3 ">
      <h1 className="text-3xl text-center my-6">Sign Up</h1>
      <form className="flex flex-col gap-4 ">
        <input
          type="text"
          placeholder="Enter first name"
          className="p-3 rounded-lg capitalize"
        />
        <input
          type="text"
          placeholder="Enter last name"
          className="p-3 rounded-lg capitalize"
        />
        <input
          type="number"
          placeholder="Enter mobile number"
          className="p-3 rounded-lg capitalize"
        />
        <input
          type="email"
          placeholder="Enter email"
          className="p-3 rounded-lg capitalize"
        />
        <input
          type="password"
          placeholder="Enter password"
          className="p-3 rounded-lg capitalize"
        />
        <input
          type="password"
          placeholder="confirm password password"
          className="p-3 rounded-lg capitalize"
        />
        <button className="p-3 rounded-lg bg-slate-600 text-white  uppercase hover:opacity-95 disabled:opacity-75">
          Sign Up
        </button>
        <div>Google Auth</div>
      </form>

      <div>
        Don't have an Account ? <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
};

export default SignUp;
