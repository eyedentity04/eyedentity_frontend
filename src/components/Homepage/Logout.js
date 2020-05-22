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
    <div className="nav-link" onClick={onChange}>
     <FontAwesomeIcon icon={faSignOutAlt} className="fa-lg mx-auto" />
     &nbsp;
      Logout
    </div>
  );
};

const mapDispatchToProps = {
  logout: logout,
};

export default connect(null, mapDispatchToProps)(Logout);
