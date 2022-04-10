import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import googleLogo from "../../images/google.png";

const Login = () => {
  return (
    <div className="user-login-form">
      <form>
        <h5 className="form-title">login</h5>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">password</label>
          <input type="password" name="password" id="password" required />
        </div>
        <div className="input-button">
          <input type="submit" value="Login" />
        </div>
        <div className="sign-up">
          <span>New to Ema-Jon</span>
          <Link to="/signup">Create New Account</Link>
        </div>
        <div className="or">
          <div className="text">or</div>
        </div>
        <div className="google-sign-in">
          <button>
            <img src={googleLogo} alt="" />
            <span>continue with google</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
