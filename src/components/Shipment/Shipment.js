import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  console.log(name, address);
  return (
    <div className="user-login-form">
      <form>
        <h5 className="form-title">shipping information</h5>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            onBlur={(event) => setName(event.target.value)}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            readOnly
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">address</label>
          <input
            onBlur={(event) => setAddress(event.target.value)}
            type="text"
            name="address"
            id="address"
          />
        </div>
        <div className="input-button">
          <input type="submit" value="add to shipping " />
        </div>
      </form>
    </div>
  );
};

export default Shipment;
