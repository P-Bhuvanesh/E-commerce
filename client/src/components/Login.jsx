import React, { useState } from "react";
import "../styles/Login.css";
import login from "../assets/login.png";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setLoginData((prevValue) => {
      const { name, value } = e.target;
      return { ...prevValue, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((data) => {
        if (data.ok) {
          toast.success("Login successful");
          return data.json();
        } else {
          return toast.error("Incorrect username or password");
        }
      })
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", JSON.stringify(data.token));
          navigate("/home");
        }
      })
      .catch((err) => console.error(err.stack));
  };

  return (
    <div className="wrapper">
      <div className="login-container">
        <div className="login-child-container">
          <div className="login-left">
            <img src={login} alt="" />
            <p>Get access to your Orders, Wishlist and Recommendations</p>
          </div>
          <div className="login-right">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="abc@gmail.com"
                required
                className="login"
                name="email"
                value={loginData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="*********"
                required
                className="login"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
              {/* <Link to="/home"> */}
              <button type="submi" className="login-btn">
                Login
              </button>
              {/* </Link> */}
              <p>
                Don't have an account?
                <Link to="/signup">
                  <span className="login-new">Signup</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
