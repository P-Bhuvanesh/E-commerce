import React from "react";
import "../styles/Login.css";
import login from "../assets/login.jpg";
import bg from "../assets/bg.jpg"
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="wrapper">
    <div className="login-container">
      <div className="login-child-container">
        <div className="login-left">
          <img src={login} alt="" />
          <h1>Login</h1>
          <p>Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div className="login-right">
          <form>
            <input
              type="email"
              placeholder="abc@gmail.com"
              required
              className="login"
            />
            <input
              type="password"
              placeholder="*********"
              required
              className="login"
            />
            <Link to = "/products"><button className="login-btn">Login</button></Link>
            <p>
              Don't have an account?<span className="login-new"><Link to = "/signup"> Signup</Link></span>
            </p>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
