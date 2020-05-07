import React, { useState } from "react";
import "./Style.css";
import { connect } from "react-redux";
import Logo from "../Img/logo.png";
import { register } from "../../actioncreators/register";

const Register = (props) => {
  const [data, setData] = useState();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  const save = () => {
    props.register(data);
  };
  
return (
    <div className="cardform">
      <div className="card p-3 rounded" style={{ width: "18rem" }}>
        <img
          src={Logo}
          className="card-img-top mx-auto"
          alt="..."
          style={{ width: "75px" }}
        />
        <h4 className="card-title mx-auto">Register</h4>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
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
              onChange={handleChange}
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
            />
          </div>
          <div className="form-group form-check"></div>
          <button
            type="submit"
            className="btn btn-info btn-block"
            onClick={save}
          >
            Make An Account
          </button>
        </form>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  register: register,
};

export default connect(null, mapDispatchToProps)(Register);
