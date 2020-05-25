import React from "react";
import {Formik,Form} from 'formik'
import "./Add.css";
import { connect } from "react-redux";
import {addComment} from "../../actioncreators/comment";
import { config } from "@fortawesome/fontawesome-svg-core";


const comment = (props) => {
  const {_id} = props
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;  
  
  return (
      <Formik
        initialValues={{
          postId:_id,
          userComment : id,
          commentText : '',
        }}
        onSubmit ={(values,action)=>{
          const data = {
            postId : values.postId,
            userComment : values.userComment,
            commentText : values.commentText
          }
          props.addComment(data);
          action.resetForm()
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
              <button type="submit" className="btn text-light">
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
