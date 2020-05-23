import React, { useState } from "react";
import "./Style.css";
import { connect } from "react-redux";
import Logo from "../Img/logofinal.png";
import { register } from "../../actioncreators/register";
import {Link} from 'react-router-dom'

const Register = (props) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.register(data);
    window.alert("register succes")
  };

  return (
    <div className="cardform">
      <div className="card p-3 rounded" style={{ width: "18rem", backgroundColor: "white" }}>
      <img
          src={Logo}
          className="mx-auto"
          alt="..."
          style={{ width: "55px" }}
        />
        <h4 className="card-title mx-auto">Register</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
            />
            <br/>
            <p className="text-center leading">
            Login Here <Link to="/login">Login</Link>
          </p>
          </div>
          <div className="form-group form-check"></div>
          <button type="submit" className="btn text-light btn-block">
            Make An Account
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  register,
};

export default connect(null, mapDispatchToProps)(Register);
