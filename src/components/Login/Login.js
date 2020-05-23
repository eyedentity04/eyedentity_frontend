import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Style.css";
import Logo from "../Img/logofinal.png";
import { login } from "../../actioncreators/login";

const Index = (props) => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(data);
  };

  return (
    <div className="cardform">
      <div className="card p-3 rounded" style={{ width: "18rem", backgroundColor : "white"}}>
        <img
          src={Logo}
          className="mx-auto"
          alt="..."
          style={{ width: "55px" }}
        />
        <h4 className="card-title mx-auto">Login</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              onChange={handleChange}
              value={data.email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
          </div>
          <div className="form-group form-check"></div>
          <p className="text-center leading">
            Don't have an account ? <Link to="/register">Register</Link>
          </p>
            <button type="submit" className="btn text-light btn-block">
              Submit
            </button>
        </form>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    vialogin: state.login.vialogin
  };
};

const mapDispatchToProps = {
  login: login,
};

export default connect(mapStateToProps,mapDispatchToProps)(Index);