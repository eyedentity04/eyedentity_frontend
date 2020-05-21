import React, { Component } from "react";
import Navbar from "../Navbar";
import profilepic from "../Img/img1.jpg";
import "./Profile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faImages,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

class Profile extends Component {
  render() {
    return (
      <div>
        <Navbar />
        
          <div className="profile">
            <img src={profilepic} className="profileimage" alt="..." />
            <br/><br/><br/><br/><br/><br/>
            <div className="username">
              <h2>User</h2>
              <span>This is user</span>
            </div>

            <br />
          </div>
            <div className="row">
            <div className="col-lg-4">
            <FontAwesomeIcon icon={faUserFriends} className="fa-2x " />
            <h4 className="rowicon">Friends</h4>
            </div>
            <div className="col-lg-4">
            <FontAwesomeIcon icon={faImages} className="fa-2x" />
            <h4  className="rowicon">Images</h4>
            </div>
            <div className="col-lg-4">
            <FontAwesomeIcon icon={faUsers} className="fa-2x " />
            <h4  className="rowicon">Community</h4>
            </div>
          

            </div>
          </div>
    );
  }
}
export default Profile;
