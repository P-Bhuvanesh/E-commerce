import React from "react";
import "../styles/Login.css";
import login from "../assets/login.jpg";
import { Link } from "react-router-dom";
const Login = () => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

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
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                className="login"
              />
              <input
                type="password"
                placeholder="*********"
                required
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className="login"
              />
              <Link to="/home">
                <button className="login-btn">Login</button>
              </Link>
              <p>
                Don't have an account?
                <span className="login-new">
                  <Link to="/signup"> Signup</Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
