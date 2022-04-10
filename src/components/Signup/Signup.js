import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleLogo from "../../images/google.png";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  let navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setConformPassword] = useState("");
  const [error, setError] = useState("");
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConformPasswordBlur = (event) => {
    setConformPassword(event.target.value);
  };

  const createUser = (event) => {
    event.preventDefault();
    if (password !== conformPassword) {
      setError("password does not match");
      return;
    }
    if (password.length < 6) {
      setError("password under 6 character");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  // if user login then redirect in shop page
  if (user) {
    navigate("/shop");
    console.log(user);
  }

  return (
    <div className="user-login-form">
      <form onSubmit={createUser}>
        <h5 className="form-title">Sign Up</h5>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            onBlur={handleEmailBlur}
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">password</label>
          <input
            onBlur={handlePasswordBlur}
            type="password"
            name="password"
            id="password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="conform-password">Conform Password</label>
          <input
            onBlur={handleConformPasswordBlur}
            type="password"
            name="conform-password"
            id="conform-password"
            required
          />
        </div>
        <p style={{ color: "red" }}>{error}</p>
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
