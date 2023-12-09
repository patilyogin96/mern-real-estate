import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { open_api } from "../utils/network";
import GoogleOauth from "../components/GoogleOauth/GoogleOauth";

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
  const [loading, setLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const validate = () => {
    const errors = {
      error: false,
    };
    const { email, firstName, lastName, password, confirmPassword } = formdata;

    if (!email) {
      errors.email = "Please enter email";
      errors.error = true;
    }

    if (!firstName) {
      errors.firstName = "Please enter First Name";
      errors.error = true;
    }

    if (!lastName) {
      errors.lastName = "Please enter Last Name";
      errors.error = true;
    }

    if (!password) {
      errors.password = "Please enter Password";
      errors.error = true;
    }

    if (confirmPassword) {
      errors.confirmPassword = "Please enter Password again";
      errors.error = true;
    }

    setFormErrors(errors);

    console.log("Data", errors);
    return errors;
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    let validateForm = validate();
    if (validateForm.error) return;

    try {
      setLoading(true);
      const signupResponse = await open_api.post(`v1/auth/sign-up`, {
        ...formdata,
        full_name: `${formdata?.firstName || ""}  ${formdata?.lastName || ""}`,
      });
      console.log("SIgnuPREsponse", signupResponse);
      // after success full sign-up redirect to sign-in page
      if (signupResponse?.status === "201") {
        navigate("/sign-in");
        return;
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
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
          className={`p-3 rounded-lg capitalize ${
            formErrors?.firstName ? "border border-solid border-red-600" : ""
          } `}
          name="firstName"
          value={formdata?.firstName}
          onChange={handleChange}
        />
        {formErrors?.firstName && (
          <small className="validateFields">{formErrors?.firstName}</small>
        )}
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
        <button
          disabled={loading}
          className="p-3 rounded-lg bg-slate-600 text-white  uppercase hover:opacity-95 disabled:opacity-75"
        >
          Sign Up
        </button>
        <GoogleOauth />
      </form>

      <div className="mt-3 text-center hover:text-blue-500">
        Don't have an Account ? <Link to="/sign-up">Sign up</Link>
      </div>
    </div>
  );
};

export default SignUp;
