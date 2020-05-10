import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { loginUser } from "../../actioncreators/auth";
import classnames from "classnames";

import "./Style.css";
import Logo from "../Img/logo.png";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/"); 
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
    console.log(userData);
  };
  render() {
    const { errors } = this.state;
    return (
      <div className="cardform">
        <div className="card p-3 rounded" style={{ width: "18rem" }}>
          <img
            src={Logo}
            className="card-img-top mx-auto"
            alt="..."
            style={{ width: "75px" }}
          />
          <h4 className="card-title mx-auto">Login</h4>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                error ={errors.email}
                className={classnames('form-control',{invalid:errors.email})}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.onChange}
                error ={errors.password}
                className={classnames("from-control",{invalid:errors.password})}
              />
            </div>
            <div className="form-group form-check"></div>
            <p className="text-center leading">
              Don't have an account ? <Link to="/register">Register</Link>
            </p>
            <button type="submit" className="btn btn-info btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({ auth: state.auth, errors: state.errors });
export default connect(mapStateToProps, { loginUser })(withRouter(Login));

