import React, { useState } from "react";
import "./Login.css";
import googleLogo from "../../images/google.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  // user submit form then call login handle
  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // if user login  in this application then navigate shop page
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="user-login-form">
      <form onSubmit={handleLogin}>
        <h5 className="form-title">login</h5>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            onBlur={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">password</label>
          <input
            onBlur={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            id="password"
          />
        </div>
        <p style={{ color: "red" }}>
          {error && "your email and password invaild"}{" "}
        </p>
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
