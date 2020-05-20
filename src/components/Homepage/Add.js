import React from "react";
import { Formik } from "formik";
import "./Add.css";
import Tag from './Tag'
import { connect } from "react-redux";
import { add } from "../../actioncreators/Home";
import { Form } from "react-bootstrap";

const Add = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  
  return (
    <Formik
      initialValues={{
        name: id,
        description: "",
        image: null,
        // tag: [],
      }}
      onSubmit={(values) => {
        let formData = new FormData();

        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("image", values.image);
        formData.append("tag", values.tags);

        props.add(formData);
      }}
    >
      {(props) => (
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
                onChange={(event) => {
                  props.setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
            </div>
            
            <button
              type="submit"
              className="btn btn-info"
              style={{ backgroundColor: "#8D7B65" }}
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = { add: add };

export default connect(null, mapDispatchToProps)(Add);
