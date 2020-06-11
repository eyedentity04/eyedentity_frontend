import React  from "react";
import {Formik,Form} from 'formik'
import "./Add.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {addcomment} from "../../actioncreators/comment";
import { config } from "@fortawesome/fontawesome-svg-core";
import axios from "axios"
import { faComment } from "@fortawesome/free-solid-svg-icons";


const comment = (props) => {
  
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;  
  
  return (
      <Formik
        initialValues={{
          targetPostId: props.data._id,
          userId : id,
          commentText : '',
        }}
        onSubmit ={(values,action)=>{

          props.addCommentInPost(values);
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
              <FontAwesomeIcon icon={faComment} className="fa-1x mx-auto" />
                &nbsp; Comment
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }

const mapDispatchToProps = { addcomment: addcomment };

export default connect(null, mapDispatchToProps)(comment);
