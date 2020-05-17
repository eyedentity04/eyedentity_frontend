import React, { useEffect } from "react";
import img1 from "../Img/img1.jpg";
import { connect } from "react-redux";

import { getComment } from "../../actioncreators/comment";

const ShowCommentUser = (props) => {
  const { data } = props;

  useEffect(() => {
    if (data && !data.length) {
      props.getComment();
    }
  }, []);

  const allComment = data.map((item, index) => {
    return (
      <div key={index}>
        <div className="card" style={{ width: "auto" }}>
          <div className="card-title">
            <img src={img1} className="rounded-circle ml-2 mt-2" style={{ width: "50px" }} alt="..." />
            <span>{item.name.name}</span>
          <p className="text-muted ml-2 mt-2" >{item.date}</p>
          </div>
          <div className="card-body">
            <p className="card-text">{item.comment.comment}</p>
          </div>
        </div>
      </div>
    );
  });

  return <div>{allComment}</div>
};

const mapStateToProps = (state) => {
    return {
      data: state.commentUser.data,
    };
  };

const mapDispatchToProps = {
  getComment: getComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowCommentUser);
