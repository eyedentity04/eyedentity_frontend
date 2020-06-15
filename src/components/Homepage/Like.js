import React from "react";
import {Formik,Form} from 'formik'
import "./Add.css";
import { connect } from "react-redux";
import {addLike} from "../../actioncreators/Home"


const like = (props) => {

  console.log(props)
  
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;  
  
  return (
      <Formik
        initialValues={{
          userLike : id,
          
        }}
        onSubmit ={(values)=>{
          let formData = new FormData();

          
          
          props.addLike(values);
        }}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <div>
              <div className="form-group">
                <textarea
                className="form-control"
                id="comment"
                name="commentText"
                rows={2}
                style={{ resize: "none" }}
                value={props.values.comment}
                placeholder="Comment"
                onChange={props.handleChange}
              />
              </div>
              <button type="submit" className="btn btn-info" style={{backgroundColor : "#8D7B65"}}>
                like
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }

const mapDispatchToProps = { addLike: addLike };

export default connect(null, mapDispatchToProps)(like);
