import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { add } from "../../actioncreators/Home";
import { Form } from "react-bootstrap";
import Geocode from "react-geocode";
import axios from "axios";
import "./Add.css";
import "./tag.css";
import {
  ModalTitle,
  ModalBody,
  ModalFooter,
  Modal,
  Button,
} from "react-bootstrap";

function MyVerticallyCenteredModal(props) {
  const Url = process.env.REACT_APP_API_URL;
  const key = process.env.REACT_APP_API_KEY;

  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [query, setQuery] = useState("");

  const [tag, setTag] = useState([]);
  const [showModal, setShowModal] = useState(false);
  

  const [url, setUrl] = useState(
    "https://api.riyofirsan.com/users/findQuery?name=redux"
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setTags(result.data);
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      Geocode.setApiKey(`${key}`);
      Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      ).then((response) => {
        console.log(response.results[0].address_components[4].long_name);
        setData({
          lat: response.results[3].geometry.location.lat,
          lng: response.results[3].geometry.location.lng,
          city: response.results[0].formatted_address,
        });
      });
    });
  }, []);

  let city = data.city;
  let lng = data.lng;
  let lath = data.lat;

  const removeTags = (index) => {
    setTag([...tag.filter((tags) => tag.indexOf(tags) !== index)]);
  };

  const searchTags = async (query) => {
    const result = await axios(
      `https://api.riyofirsan.com/users/findQuery?name=${query}`
    );
    setTags(result.data);
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Post Here
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Formik
      initialValues={{
        name: id,
        description: "",
        image: null,
        namePlace: city,
        long: lng,
        lat: lath,
        tag: "",
      }}
      onSubmit={(values, action) => {
        let formData = new FormData();
        formData.set("name", values.name);
        formData.set("description", values.description);
        formData.set("namePlace", city);
        formData.set("long", lng);
        formData.set("lat", lath);
        formData.append("image", values.image);
        tag.forEach((item) => {
          formData.append("tag", item._id);
        });
        props.add(formData);
        action.resetForm();
        setTag([]);
        setTags([]);
        setShowModal(!showModal);
      }}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <div className="form-group mt-4">
                      <div className="tags-input">
                        <ul
                          id="tags"
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          {tag.map((item, index) => (
                            <li key={index} className="tag test">
                              <span className="tag-title">{item.name}</span>
                              <span
                                className="tag-close-icon"
                                onClick={() => removeTags(index)}
                              >
                                x
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <textarea
                        className="form-control "
                        id="description"
                        name="description"
                        rows={4}
                        style={{
                          resize: "none",
                        }}
                        value={props.values.description}
                        placeholder="Type something...."
                        onChange={props.handleChange}
                      />
                      <div
                        value={props.namePlace}
                        onChange={props.handleChange}
                      />

                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tag Your Friends Here"
                          value={query}
                          onChange={(event) => setQuery(event.target.value)}
                        />
                        <button
                          type="button"
                          className="btn text-light"
                          onClick={() => searchTags(query)}
                        >
                          Search
                        </button>
                      </div>

                      <div className="tags-input">
                        <ul id="tags">
                          {tags.map((item, index) => (
                            <li key={index} className="tag">
                              <button
                                className="btn-custom"
                                type="button"
                                onClick={(e) => setTag([...tag, item])}
                              >
                                <span className="tag-title">{item.name}</span>
                              </button>

                              <span
                                className="tag-close-icon"
                                onClick={() => removeTags(index)}
                              >
                                x
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="upload-btn-wrapper mt-2">
                        <button type="submit" className="custom-btn ">
                          Upload a file
                        </button>

                        <input
                          type="file"
                          className="form-control "
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
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <button type="submit" className="btn text-light btn-block">
                      Submit
                    </button> 
        </Form>
        
      )}
   </Formik>
        
  </Modal.Body>
  </Modal>
    
  );
}

const Add = (props) => {
  const [modalShow, setModalShow] = React.useState(false);
  

  return (
        <Form onSubmit={props.handleSubmit}>
          <div className="container">
            <textarea
              readOnly
              onClick={() => setModalShow(true)}
              className="form-control mt-4 mb-4"
              rows={4}
              style={{
                resize: "none",
                backgroundColor: " white",
                cursor: "pointer",
              }}
              placeholder="Type something...."
              
            />

            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />

             {/* <div
              className="modal fade"
              id="exampleModalCenter"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            > 
               <div
                className="modal-dialog modal-dialog-centered"
                role="document"
              > 
                 <div className="modal-content">
                  <div className="modal-header">
                    <h5
                      className="modal-title"
                      id="exampleModalCenterTitle mx-auto"
                    >
                      Post here
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
                    <div className="form-group mt-4">
                      <div className="tags-input">
                        <ul
                          id="tags"
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          {tag.map((item, index) => (
                            <li key={index} className="tag test">
                              <span className="tag-title">{item.name}</span>
                              <span
                                className="tag-close-icon"
                                onClick={() => removeTags(index)}
                              >
                                x
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <textarea
                        className="form-control "
                        id="description"
                        name="description"
                        rows={4}
                        style={{
                          resize: "none",
                        }}
                        value={props.values.description}
                        placeholder="Type something...."
                        onChange={props.handleChange}
                      />
                      <div
                        value={props.namePlace}
                        onChange={props.handleChange}
                      />

                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Tag Your Friends Here"
                          value={query}
                          onChange={(event) => setQuery(event.target.value)}
                        />
                        <button
                          type="button"
                          className="btn text-light"
                          onClick={() => searchTags(query)}
                        >
                          Search
                        </button>
                      </div>

                      <div className="tags-input">
                        <ul id="tags">
                          {tags.map((item, index) => (
                            <li key={index} className="tag">
                              <button
                                className="btn-custom"
                                type="button"
                                onClick={(e) => setTag([...tag, item])}
                              >
                                <span className="tag-title">{item.name}</span>
                              </button>

                              <span
                                className="tag-close-icon"
                                onClick={() => removeTags(index)}
                              >
                                x
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="upload-btn-wrapper mt-2">
                        <button type="submit" className="custom-btn ">
                          Upload a file
                        </button>

                        <input
                          type="file"
                          className="form-control "
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
                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                    <button type="submit" className="btn text-light btn-block">
                      Submit
                    </button>
                  </div>
                </div> 
               </div>
            </div>  */}


          </div>
        </Form>
  );
};

const mapDispatchToProps = {
  add: add,
};

export default connect(null, mapDispatchToProps)(Add);
