import React  from "react";
import {Formik,Form} from 'formik'
import "./Add.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import {addcomment} from "../../actioncreators/comment";
import { faComment } from "@fortawesome/free-solid-svg-icons";


const comment = (props) => {
  
  const { data } = props;

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;  
  
  console.log(props.data._id)
  console.log(props.id)

  return (
      <Formik
        initialValues={{
          targetPostId: props.id,
          userComment : id,
          commentText : '',
        }}
        onSubmit ={(values,action)=>{
          props.addcomment(values);
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
