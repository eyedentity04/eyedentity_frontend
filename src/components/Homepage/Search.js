import React from "react";
import { Link } from "react-router-dom";

const UserDetail = (props) => {
  const { _id, name } = props;
  return (
    <Link to={`/profile/${_id}`}>
      <div className="card-body" style={{ width: "25.4rem" }}>
        {name}
      </div>
    </Link>
  );
};

export default UserDetail;
