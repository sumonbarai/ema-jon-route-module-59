import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleLogo from "../../images/google.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [err, setErr] = useState("");
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  // create user in sign up file
  const createUser = (event) => {
    event.preventDefault();
    if (password !== conformPassword) {
      setErr("your password does not match");
      return;
    }
    if (password.length < 6) {
      setErr("your password under six characters");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };

  // go to shop page
  if (user) {
    navigate("/shop");
  }

  return (
    <div className="user-login-form">
      <form onSubmit={createUser}>
        <h5 className="form-title">Sign Up</h5>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            onBlur={(event) => setEmail(event.target.value)}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">password</label>
          <input
            onBlur={(event) => setPassword(event.target.value)}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="conform-password">Conform Password</label>
          <input
            onBlur={(event) => setConformPassword(event.target.value)}
            type="password"
            name="conform-password"
            id="conform-password"
            required
          />
        </div>
        {err && <p style={{ color: "red" }}>{err}</p>}
        <div className="input-button">
          <input type="submit" value="Sign Up" />
        </div>
        <div className="sign-up">
          <span>All ready have an account</span>
          <Link to="/login">login</Link>
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

export default Signup;
