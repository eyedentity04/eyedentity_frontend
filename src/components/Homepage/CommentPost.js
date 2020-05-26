import React, {useState, useEffect} from 'react'
import axios from "axios"

import "./Add.css";

const CommentPost = (props) => {

    // const {data} = props

    const [comment,setComment] = useState([])

    const url = process.env.REACT_APP_API_URL

    useEffect(() =>{
       
        async function myComment() {
            const user = JSON.parse(localStorage.getItem("user"))
            const token = user.token
            const result = await axios.get(`${url}/comment/find/${props.data._id}`,{
            headers: { "token": token }
            }).catch(err => {
                window.alert("error",err)
            })
            setComment(result.data)
            console.log(result.data)
        }
        myComment()
        
    }, [])
    

    let getComment = comment.map((item,index) => {
        console.log(item.comment)
        return(
            <div key={item} data={index}>
                <div className="card-title">
                    <h6 >{item.comment.map((item,index) => <span key={index} data={item}>{item.userComment.name}</span>)}</h6>
                </div>
                <div className="card-text"> 
                    <p>{item.comment.map((item,index) => <span key={index} data={item}>{item.commentText}</span>)}</p>
                </div>
                
            </div>
        )
        
    })

    return (
        <div className="card mt-3 mb-3">
            <div className="card-header">
                This is Comment
            </div>
            <div className="card-body">
                {getComment}
            </div>
        </div>
    )

};

export default CommentPost