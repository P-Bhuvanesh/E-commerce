import React, { useState } from "react";
import "../styles/Signup.css";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setUserData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      toast.success("User registered successfully");
      console.log(userData);
      // Bhuvi do one thing upload the code in github and sendme da ?? i'll debug with in this night 
      setUserData({
        name: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Error while registering user");
    }
  };

  return (
    <div className="signupcontainer">
      <div className="signupchild">
        <div className="signupleft">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={userData.name}
              placeholder="Enter Your name"
              className="signup"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              value={userData.email}
              placeholder="Enter your E-mail"
              className="signup"
              onChange={handleChange}
              required
            />
            <input
              type="tel" // Changed type to 'tel' for mobile number
              name="mobileNumber"
              value={userData.mobileNumber}
              placeholder="Enter the mobile Number"
              className="signup"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Enter the password"
              name="password"
              value={userData.password}
              className="signup"
              onChange={handleChange}
              required
            />
            <input
              type="password"
              placeholder="Re-enter the password"
              className="signup"
              onChange={handleChange}
              name="confirmPassword"
              value={userData.confirmPassword}
              required
            />
            <button type="submit" className="signup-btn">
              SignUp
            </button>
            <p>
              Already our customer ?{" "}
              <span className="signupnew">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </form>
        </div>
        <div className="signupright">
          <img src={login} alt="signup" />
          <h1>Signup</h1>
          <p>Looks like you're new here!</p>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Signup;
