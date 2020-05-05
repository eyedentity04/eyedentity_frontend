import React, { Component } from "react";
import Logo from '../components/Img/logo.png'
import {Link} from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-info">
          <Link className="navbar-brand" to="/">
            <img src={Logo} width="65px"/>
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
          <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/community">
                  Community
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/message">
                  Message
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-danger" to="/logout">
                  Log out
                </Link>
              </li>
              
            </ul>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
