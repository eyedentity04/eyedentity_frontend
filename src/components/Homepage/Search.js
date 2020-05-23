import React from 'react'
import { Link } from 'react-router-dom';

const UserDetail = props => {
    const { _id,name } = props;
    return (
      <p>
        <Link to={`/profile/${_id}`}>{name}</Link>
      </p>
    );
  };

export default UserDetail