import React, { Component } from "react";
import Logo from "./Img/logofinal.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlus, faHome } from "@fortawesome/free-solid-svg-icons";
import Logout from "./Homepage/Logout";
import img1 from "./Img/img1.jpg";
import "./Navbar.css";
import axios from "axios";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));

    axios
      .get(`http://api.riyofirsan.com/users/show/${user.id}`)
      .then((response) => {
        this.setState({ data: response.data });
        console.log(response);
      });
  }

  render() {
    let user = Object.assign({}, this.state.data);

    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            backgroundColor: "#4d3e3e",
            padding: "0% 5% 0% 5%",
          }}
        >
          <Link className="navbar-brand" to="/">
            <img src={Logo} width="35px" alt="" />
            <strong> Memoir</strong>
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
            <form className="form-inline my-2 my-lg-0 ">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  size="50"
                />
                <button
                  class="btn btn-info"
                  type="submit"
                  style={{ backgroundColor: "#8D7B65" }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item  ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to="/profile">
                  <img
                    src={img1}
                    className="rounded-circle"
                    style={{ width: "25px" }}
                    alt="..."
                  />
                  <b>
                    <span> {user.name}</span>{" "}
                  </b>
                </Link>
              </li>
              <li className="nav-item  ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to="/">
                  <FontAwesomeIcon icon={faHome} className="fa-lg mx-auto" />
                  &nbsp;
                   Home
                </Link>
              </li>
              <li className="nav-item ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to="/message">
                  <FontAwesomeIcon icon={faPlus} className="fa-lg mx-auto" />
                  &nbsp;
                   Add
                </Link>
              </li>

              <li className="nav-item ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Logout />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
