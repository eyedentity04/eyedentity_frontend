import React, { Component } from "react";
import Navbar from "../Navbar";
import profilepic from "../Img/img1.jpg";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faImages,
  faVideo,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="profile">
            <img src={profilepic} className="profileimage" alt="..." />
            <br/><br/><br/><br/><br/><br/>
            <div className="username">
              <h2>User</h2>
              <span>This is user</span>
            </div>

            <br />
          </div>
          <div>
            <br />
            <br />
            <div className="row">
              <div className="col-md-3">
                <div className="card" style={{ width: "16rem" }}>
                  <FontAwesomeIcon
                    icon={faUserFriends}
                    className="fa-8x mx-auto"
                  />
                  <div className="card-body">
                    <h5 className="card-title mx-auto">Friends</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card" style={{ width: "16rem" }}>
                  <FontAwesomeIcon icon={faImages} className="fa-8x mx-auto" />
                  <div className="card-body">
                    <h5 className="card-title mx-auto">Images</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card" style={{ width: "16rem" }}>
                  <FontAwesomeIcon icon={faVideo} className="fa-8x mx-auto" />
                  <div className="card-body">
                    <h5 className="card-title mx-auto">Videos</h5>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card" style={{ width: "16rem" }}>
                  <FontAwesomeIcon icon={faUsers} className="fa-8x mx-auto" />
                  <div className="card-body">
                    <h5 className="card-title mx-auto">Communities</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Profile;
