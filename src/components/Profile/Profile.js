import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Postprofile from "./PostProfile";
import { saveHide } from "../../actioncreators/Home";
import Navbar from "../Navbar";
import "./Profile.css";
import Add from '../PageAdd/Addpage'
import { connect } from "react-redux";
import { showSuccess} from "../../actioncreators/Home";

const Profile = (props) => {
  const url = process.env.REACT_APP_API_URL;

  const { _id } = useParams();
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get(`${url}/users/show/${_id}`).then((res) => {
      const data = res.data;
      setData(data);
    });
  }, [data]);

  return (
    <div>
      <Navbar />
      <div
        className="profile"
        style={{ backgroundImage: `url(${url}/${data.backGroundImage})` }}
      >
        <img src={`${url}/${data.image}`} className="profileimage" alt="..." />

        <br />
      </div>
      <div className="jumbotron">
        <div className="row user-row">
        <div className="userdata">
          <h2>{data.name}</h2>
        <span>{data.about}</span>
          </div>


        <div className="settings">
        <FontAwesomeIcon icon={faPen} className="fa-2x mx-auto iconhover" onClick={() => setShowModal(true)} />
        <Add 
        show={showModal}
        onHide={() => setShowModal(false)}
        success={props.saveHide}
        showSuccess={props.showSuccess}
        />
        </div>

        </div>
        
      </div>
      <Postprofile />
    </div>
  );
};

const mapDispatchtoProps = {saveHide:saveHide, showSuccess : showSuccess }

export default connect (null,mapDispatchtoProps)( Profile);
