import React, { useEffect, useState } from "react";
import img1 from "../Img/img1.jpg";
import dayjs from "dayjs";
import relativeTime from 'dayjs/plugin/relativeTime'
import "../Homepage/post.css"
import { connect } from "react-redux";
import { getData } from "../../actioncreators/profile";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp,faComment } from "@fortawesome/free-solid-svg-icons";
import axios from "axios"

const Post = (props) => {

  const url = process.env.REACT_APP_API_URL

  const { _id } = useParams();
  const [data,setData] = useState([])
  const [name,setName] = useState({})

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    const token = user.token
    const id = user.id
    axios.get(`https://api.riyofirsan.com/users/show/${_id}`).then((res) => {
      const data = res.data;
      setName(data);
      console.log(data.name)
    });
  }, []);

  

  useEffect(() =>{
       
    async function myProfile() {
        const user = JSON.parse(localStorage.getItem("user"))
        const token = user.token
        const id = user.id
        const result = await axios.get(`${url}/post/find/${_id}`,{
        headers: { "token": token }
        }).catch(err => {
            window.alert("error",err)
        })
        setData(result.data)
        console.log(result.data)
    }
    myProfile()
    
}, [])

dayjs.extend(relativeTime)

  const showPost = data.map((item, index) => {
    console.log(item.tagPlace[0].namePlace);
    return (
      <div key={index}>
        <div class="card mt-3 w-100" style={{ borderRadius: "10px" }}>
          <div class="card-header">
            <div className="d-flex flex-row">
              <img src={img1} style={{ width: "50px", borderRadius: "50%" }} />
              <div className="d-inline-flex flex-column">
                <p className="lead font-weight-bold mb-0 ml-2">
                  {name.name}
                </p>
                <p className=" text-muted mb-0 ml-2">
                {item.tagPlace[0].namePlace !== "undefined" ? item.tagPlace[0].namePlace : null}</p>
              </div>
              <p className="text-muted ml-auto">{dayjs(item.date).fromNow()}</p>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">{item.description}</p>
            <img
              className="card-img-top"
              src={`https://api.riyofirsan.com/${item.image}`}
              alt=""
            />
           </div>
        </div>
      </div>
    );
  });

  return <div className="container">{showPost}</div>;
};



export default Post