import React, { useState } from "react";
import "../styles/Signup.css";
import login from "../assets/signup.png";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmpassword: "",
  });
  const success = () => toast.success("User registered successfully");
  const error = () => toast.error("User registration failed");
  const handleChange = (e) => {
    setSignupData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      });
      if (response.ok) {
        success();
        setSignupData({
          name: "",
          email: "",
          mobile: "",
          password: "",
          confirmpassword: "",
        });
      } else {
        const errorMessage = await response.text();
        error(errorMessage);
      }
    } catch (err) {
      console.error(err);
      error("Failed to submit form");
    }
  };
  return (
    <div className="signupcontainer">
      <div className="signupchild">
        <div className="signupleft">
          <h1>Signup</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={signupData.name}
              placeholder="Enter Your name"
              className="signup"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={signupData.email}
              placeholder="Enter your E-mail"
              className="signup"
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobileNumber"
              value={signupData.mobileNumber}
              placeholder="Enter the mobile Number"
              className="signup"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Enter the password"
              name="password"
              value={signupData.password}
              className="signup"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Re-enter the password"
              className="signup"
              name="confirmpassword"
              value={signupData.confirmpassword}
              onChange={handleChange}
              required
            />
            <button type="submit" className="signup-btn">
              SignUp
            </button>
            <p>
              Already our customer ?{" "}
              <Link to="/login">
                <span className="signupnew">Login</span>
              </Link>
            </p>
          </form>
        </div>
        <div className="signupright">
          <img src={login} alt="signup" />

          <p>Looks like you're new here!</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
