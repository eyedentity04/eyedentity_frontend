import React from "react";
import {Formik,Form} from 'formik'
import "./Add.css";
import { connect } from "react-redux";
import {addComment} from "../../actioncreators/comment";
// import {Form} from 'react-bootstrap'


const comment = (props) => {
  
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;  
  
  return (
      <Formik
        initialValues={{
          targetPostId : item_.id,
          userComment : id,
          commentText : '',
        }}
        onSubmit ={(values)=>{
          let formData = new FormData();

          formData.append('userComment',values.userComment)
          formData.append('commentText',values.commentText)

          props.addComment(formData);
        }}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <div>
              <div className="form-group">
                <textarea
                className="form-control"
                id="commentText"
                name="commentText"
                rows={2}
                style={{ resize: "none" }}
                value={props.values.commentText}
                placeholder="Comment"
                onChange={props.handleChange}
              />
              </div>
              <button type="submit" className="btn btn-info" style={{backgroundColor : "#8D7B65"}}>
                Comment
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }

const mapDispatchToProps = { addComment: addComment };

export default connect(null, mapDispatchToProps)(comment);
