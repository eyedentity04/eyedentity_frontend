import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Style.css'
import Logo from '../Img/logo.png'

const URL = `http://localhost:8000/users/register`

const Register = () => {
  const [register, setRegister] = useState([]);
  useEffect(() => {
    axios.post(URL).then((response) => {
      setRegister(response.data);
    });
  }, []);

  return (
    <div className="cardform">
      <div className="card p-3 rounded" style={{ width: "18rem" }}>
      <img src={Logo} className="card-img-top mx-auto" alt="..." style = {{width  :"75px"}}/>
      <h4 className="card-title mx-auto">Register</h4>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>1
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="form-group form-check"></div>
          <button type="submit" className="btn btn-info btn-block">
            Make An Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
