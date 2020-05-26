import React, { useEffect} from "react";
import img1 from "../Img/img1.jpg";

import { connect } from "react-redux";
import "./post.css";
import { getData } from "../../actioncreators/Home";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp,faComment } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import Comment from '../Homepage/Comment'
import axios from "axios"

const Post = (props) => {
  const { data } = props;
  
  useEffect(() => {
    if (data && !data.length) {
      props.getData();
    }
  }, [data]);

  const addlike = (targetPostId) =>{
    const user = JSON.parse(localStorage.getItem("user"))
    const token = user.token
    window.alert("addLike")
    
    axios.post("https://api.riyofirsan.com/like/create",{targetPostId},{
      headers: { "token": token },
    })
    .then((result) => console.log(result))
    .catch(err => err)
    
  }

  dayjs.extend(relativeTime)
  
  const showPost = data.map((item,index) => {
    console.log(item)
    return (
      <div key={index}>
        <div className="card mt-3 w-100" style={{ borderRadius: "10px" }}>
          <div className="card-header">
            <div className="d-flex flex-row">
              <img src={img1} style={{ height:"50px", width: "50px", borderRadius: "50%" }} />
              <div className="d-inline-flex flex-column">
                <p className="lead font-weight-bold mb-0 ml-2">
                  {item.name.name}
                </p>
                <p className=" text-muted mb-0 ml-2">
                  {item.tagPlace[0].namePlace}
                </p>
              </div>
              <p className="text-muted ml-auto">{dayjs(item.date).fromNow()}</p>
            </div>
          </div>
          <div class="card-body">
          <p className="card-text text-muted mb-0">
                {item.tag.map((item,index) =>  <span className="mr-1" key={index}> @{item.name}</span>)}
              </p>
            <p class="card-text">{item.description}</p>
            <img
              className="card-img-top"
              src={`https://api.riyofirsan.com/${item.image}`}
              alt=""
            />

            <Comment key={index} {...item} />
            
            <button
              type="button"
              className="btn text-light mt-3"
              onClick={()=>{addlike(item._id)}}
            >
              <FontAwesomeIcon icon={faThumbsUp} className="fa-1x mx-auto" />
              &nbsp; Like
            </button>

          </div>
        </div>
      </div>
    );
  });

  return <div className="container">{showPost}</div>;
};

const mapStateToProps = (state) => {
  return {
    data: state.homeUser.data,
  };
};

const mapDispatchToProps = {
  getData: getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
