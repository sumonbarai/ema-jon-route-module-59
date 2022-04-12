import React from "react";

import { Link, useNavigate } from "react-router-dom";

import logo from "../../images/Logo.svg";
import "./Header.css";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/inventory");
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div>
        <Link to="/shop">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        {user ? (
          <button onClick={logout}>Sign Out</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
