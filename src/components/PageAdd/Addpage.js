import React from "react";
import { Formik, Form } from "formik";

import { connect } from "react-redux";
import "./Addpage.css";
import { editProfile } from "../../actioncreators/Home";
import { addLike } from "../..//actioncreators/Home";
import { Link } from "react-router-dom";

const Edit = (props) => {
  return (
    <div className="">
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                Change your style
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={{
                  name: "",
                  about: "",
                  image: null,
                  backGroundImage: null,
                }}
                onSubmit={(values) => {
                  let formData = new FormData();

                  formData.set("name", values.name);
                  formData.set("about", values.about);
                  formData.append("image", values.image);
                  formData.append("backGroundImage", values.backGroundImage);

                  props.editProfile(formData);
                }}
              >
                {(props) => (
                  <Form onSubmit={props.handleSubmit}>
                    <div className="form-group">
                      <label>Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        onChange={props.handleChange}
                        value={props.values.name}
                      />
                    </div>
                    <div className="form-group">
                      <label>Status Message</label>
                      <input
                        type="text-area"
                        className="form-control"
                        id="about"
                        name="about"
                        onChange={props.handleChange}
                        value={props.values.about}
                      />
                    </div>
                    <div className="form-group">
                      <label>Photo Profile</label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={(event) => {
                          props.setFieldValue(
                            "image",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label>Profile Background </label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="backGroundImage"
                        onChange={(event) => {
                          props.setFieldValue(
                            "backGroundImage",
                            event.currentTarget.files[0]
                          );
                        }}
                      />
                    </div>
                    <div className="settingsave">
                    <button
                      type="button"
                      className="btn btn-secondary save"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn text-light save">
                      Save Changes
                    </button>
                    </div>
                    
                  </Form>
                )}
              </Formik>
            </div>
            {/* <div className="modal-footer">
              
            </div> */}
          </div>
        </div>
      </div>

      {/* <div className="card p-3 rounded" style={{ width: "25rem", backgroundColor : "white"}}>
        <h4 className="card-title mx-auto">Change your style here</h4>
        <Formik

            initialValues={{
                name : "",
                about : "",
                image : null,
                backGroundImage : null
            }}

            
            onSubmit={(values) =>{
                let formData = new FormData()

                formData.set("name",values.name)
                formData.set("about",values.about)
                formData.append("image",values.image)
                formData.append("backGroundImage",values.backGroundImage)

                props.editProfile(formData)
            }}

           
        >{(props) =>(
            <Form onSubmit={props.handleSubmit}>
                <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              onChange={props.handleChange}
              value={props.values.name}
            />
          </div>
          <div className="form-group">
            <label>Status Message</label>
            <input
              type="text-area"
              className="form-control"
              id="about"
              name="about"
              onChange={props.handleChange}
              value={props.values.about}
            />
          </div>
          <div className="form-group">
            <label>Photo Profile</label>
            <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={(event) => {
                props.setFieldValue("image", event.currentTarget.files[0]);
                }}/>
            
         </div>
         <div className="form-group">
            <label>Profile Background </label>
            <input
                type="file"
                className="form-control"
                id="image"
                name="backGroundImage"
                onChange={(event) => {
                props.setFieldValue("backGroundImage", event.currentTarget.files[0]);
                }}/>
            
         </div>
            <button type="submit" className="btn text-light btn-block">
              Submit
            </button>
            <p className="text-center leading">
            Back to <Link to="/">home</Link>
            </p>
            </Form>
        )}
          
        </Formik>
      </div> */}
    </div>
  );
};

const mapDispatchToProps = { editProfile: editProfile };

export default connect(null, mapDispatchToProps)(Edit);
