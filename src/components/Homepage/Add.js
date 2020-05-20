import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import "./Add.css";
import { connect } from "react-redux";
import { add } from "../../actioncreators/Home";
import { Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenAlt} from "@fortawesome/free-solid-svg-icons";

import Geocode from "react-geocode";



const Add = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;


  const [data,setData] = useState([])
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position.coords.latitude)
      console.log(position.coords.longitude)
      Geocode.setApiKey("AIzaSyAVDqkzOARvGHvFnfaIYEiDBeIFaTjDDGI")
      Geocode.fromLatLng(
        position.coords.latitude,
        position.coords.longitude
      ).then((response)=>{
        console.log(response.results[0].address_components[4].long_name)
        setData({
          lat: response.results[3].geometry.location.lat,
          lng: response.results[3].geometry.location.lng,
          city: response.results[0].address_components[4].long_name
        })
      })
    })
  },[])

  let city = data.city
  // console.log(city)
  let lng = data.lng
  // console.log(lng)
  let lath = data.lat
  // console.log(lath)


  return (
    <Formik
      initialValues={{
        name: id,
        description: "",
        image: null,
        namePlace : city,
        long : lng,
        lat : lath

      }}
      onSubmit={(values) => {
        let formData = new FormData();

        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("image", values.image);
        formData.append("namePlace", city);
        formData.append("long", lng);
        formData.append("lat", lath);

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
             
              

              <div
                value={props.namePlace}
                onChange={props.handleChange}
              />
              <div
                value={props.long}
                onChange={props.handleChange}
              />
              <div
                value={props.lat}
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
               <button
              type="submit"
              className="btn btn-info mt-2"
              style={{ backgroundColor: "#8D7B65" }}
            >
              <FontAwesomeIcon icon={faPenAlt} className="fa-1x mx-auto" />
                &nbsp; Submit
            </button>
            </div>
            
           
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapDispatchToProps = { add: add };

export default connect(null, mapDispatchToProps)(Add);
