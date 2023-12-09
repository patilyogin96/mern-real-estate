import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { open_api } from "../utils/network";

const SignUp = () => {
  const navigate = useNavigate();
  const [formdata, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    try {
      const signupResponse = await open_api.post(`v1/auth/sign-up`, {
        ...formdata,
        full_name: `${formdata?.firstName || ""}  ${formdata?.lastName || ""}`,
      });
      console.log("SIgnuPREsponse", signupResponse);
      // after success full sign-up redirect to sign-in page
      navigate("/sign-in");
    } catch (error) {}
  };

  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  console.log("LogUP", formdata);
  return (
    <div className="max-w-lg m-auto p-3 ">
      <h1 className="text-3xl text-center my-6">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSignUpSubmit}>
        <input
          type="text"
          placeholder="Enter first name"
          className="p-3 rounded-lg capitalize"
          name="firstName"
          value={formdata?.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter last name"
          className="p-3 rounded-lg "
          name="lastName"
          value={formdata?.lastName}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Enter mobile number"
          className="p-3 rounded-lg "
          name="mobile"
          value={formdata?.mobile}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Enter email"
          className="p-3 rounded-lg "
          name="email"
          value={formdata?.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="p-3 rounded-lg "
          name="password"
          value={formdata?.password}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="confirm password password"
          className="p-3 rounded-lg "
          name="confirmPassword"
          value={formdata?.confirmPassword}
          onChange={handleChange}
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
