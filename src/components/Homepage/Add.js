import React from "react";
import {Formik} from 'formik'
import "./Add.css";
import { connect } from "react-redux";
import { add } from "../../actioncreators/Home";
import {Form} from 'react-bootstrap'

const Add = (props) => {
    return (
      <Formik
        initialValues={{
          description : '',
          image : null
        }}
        onSubmit ={(values)=>{
          let formData = new FormData();

          formData.append('description',values.description)
          formData.append('image',values.image)

          props.add(formData);
        }}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <div className="container">
              <div className="form-group">
                <textarea
                className="form-control mt-5"
                id="description"
                name="description"
                rows={6}
                style={{ resize: "none" }}
                value={props.values.description}
                placeholder="Type something...."
                onChange={props.handleChange}
              />
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={(event)=>{
                  props.setFieldValue('image',event.currentTarget.files[0])
                }}
              />
              </div>
              <button type="submit" className="btn btn-info" >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }

const mapDispatchToProps = { add: add };

export default connect(null, mapDispatchToProps)(Add);


