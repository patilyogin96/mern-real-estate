import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleOauth from "../components/GoogleOauth/GoogleOauth";
import { open_api } from "../utils/network";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSignIn = async (e) => {
    e.preventDefault();
    // validate inputs

    try {
      const signInResponse = await open_api.post(`v1/auth/login`, formData);
      console.log("SIgnINs", signInResponse);
      // if login sucess navigate to homepage
      navigate("/");
    } catch (error) {
      console.log("LOGERROR", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  console.log("SignINg", formData);

  return (
    <div className="max-w-lg m-auto p-3 ">
      <h1 className="text-3xl text-center my-6">Sign In</h1>
      <form className="flex flex-col gap-4 " onSubmit={handleSignIn}>
        <input
          type="email"
          placeholder="Enter email"
          className="p-3 rounded-lg"
          name="email"
          value={formData?.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="p-3 rounded-lg"
          name="password"
          value={formData?.password}
          onChange={handleChange}
        />
        <button className="p-3 rounded-lg bg-slate-600 text-white  uppercase hover:opacity-95 disabled:opacity-75">
          Sign in
        </button>

        <GoogleOauth />
      </form>

      <div>
        Don't have an Account ? <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
};

export default SignIn;
