import React from "react";
import { logout } from "../../actioncreators/login";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt,} from "@fortawesome/free-solid-svg-icons";


const Logout = (props) => {

  const onChange = () => {
    props.logout();
  };
  
  return (
    <li className="nav-item  ml-lg-2 ml-md-0 mr-2 mr-md-0" style={{cursor : "pointer"}}>
    <div className="nav-link" onClick={onChange}>
     <FontAwesomeIcon icon={faSignOutAlt} className="fa-lg mx-auto"  />
     &nbsp;
     <span >Logout</span>
    </div>
    </li>
  );
};

const mapDispatchToProps = {
  logout: logout,
};

export default connect(null, mapDispatchToProps)(Logout);
