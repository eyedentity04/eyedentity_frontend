import React from 'react'
import { Link } from 'react-router-dom';

const UserDetail = props => {
    const { _id,name } = props;
    return (
      <div className="card-body">
        <Link to={`/profile/${_id}`}>{name}</Link>
      </div>

        
      
    );
  };

export default UserDetail