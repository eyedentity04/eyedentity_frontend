import React, { Component } from "react";
import Logo from "../components/Img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
          <Link className="navbar-brand" to="/">
            <img src={Logo} width="65px" alt="" />
            <strong>Welcome, Users</strong>
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="form-inline my-2 my-lg-0 mx-auto">
              <div className="input-group">
                <input type="text" class="form-control" placeholder="Search" size="50"/>
                <button class="btn btn-info" type="submit">
                  <FontAwesomeIcon icon={faSearch}/>
                </button>
              </div>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to="/community">
                  Community
                </Link>
              </li>
              <li className="nav-item ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to="/message">
                  Message
                </Link>
              </li>
              <li className="nav-item ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link text-danger active" to="/logout">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
