import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { add } from "../../actioncreators/Home";
import { Form } from "react-bootstrap";
import Geocode from "react-geocode";
import axios from "axios";
import "./Add.css";
import "./tag.css";

const Add = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;

  const [data, setData] = useState([]);
  const [tags, setTags] = useState([]);
  const [query, setQuery] = useState("");

  const [url, setUrl] = useState(
    "http://api.riyofirsan.com/users/findQuery?name=redux"
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);

      setTags(result.data);
      console.log(result.data);
    };

    fetchData();
  }, [url]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      Geocode.setApiKey("AIzaSyAVDqkzOARvGHvFnfaIYEiDBeIFaTjDDGI");
      Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      ).then((response) => {
        console.log(response.results[0].address_components[4].long_name);
        setData({
          lat: response.results[3].geometry.location.lat,
          lng: response.results[3].geometry.location.lng,
          city: response.results[0].address_components[4].long_name,
        });
      });
    });
  }, []);

  let city = data.city;
  let lng = data.lng;
  let lath = data.lat;

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
    console.log(index);
  };

  return (
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
      onSubmit={(values) => {
        let formData = new FormData();

        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("image", values.image);
        formData.append("namePlace", city);
        formData.append("long", lng);
        formData.append("lat", lath);
        formData.append("tag", values.tag);

        props.add(formData);
      }}
    >
      {(props) => (
        <Form onSubmit={props.handleSubmit}>
          <div className="container">
            <div className="form-group">
              <input
                type="text"
                className="form-control mt-5"
                id="tag"
                name="tag"
                value={props.values.tag}
                placeholder="Tag Someone With Search"
                readOnly="readOnly"
                onChange={props.handleChange}
              />

              <textarea
                className="form-control"
                id="description"
                name="description"
                rows={6}
                style={{ resize: "none" }}
                value={props.values.description}
                placeholder="Type something...."
                onChange={props.handleChange}
              />
              <div value={props.namePlace} onChange={props.handleChange} />

              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  size="30"
                  placeholder="Tag Your Friends Here"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                />
                <button
                  type="button"
                  className="btn text-light ml-1"
                  onClick={() =>
                    setUrl(
                      `http://api.riyofirsan.com/users/findQuery?name=${query}`
                    )
                  }
                >
                  Search
                </button>

                <div className="tags-input">
                  <ul id="tags">
                    {tags.map((item, index) => (
                      <li key={index} className="tag">
                        <button
                          className="btn-custom"
                          onClick={(e) => (props.values.tag = item._id)}
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
              </div>
              <div className="upload-btn-wrapper">
                <button type="submit" className="custom-btn " >
                  Upload a file
                </button>

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
            </div>
            <button
                type="submit"
                className="btn text-light"
                // style={{ backgroundColor: "#C9A982" }}
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
