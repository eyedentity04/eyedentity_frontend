import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import { getlocation } from "../../actioncreators/GetLocation";
import Geocode from "react-geocode";
import geolocation from "react-geolocation";

Location = (props) => {
  // const {
  //   coords: { latitude, longitude },
  // } = props;
  const [data, setData] = useState([]);
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
          city: response.results[0].address_components[4].long_name
        });
      });
    });
  }, []);
  return (
    <div>
      <div>
        Latitude: <span>{data.lat}</span>
      </div>
      <div>
        Longitude: <span>{data.lng}</span>
      </div>
      <div>
  Address: <span>{data.city}</span>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     coords: state.location.coords,
//   };
// };

// const mapDispatchToProps = {
//   getlocation: getlocation,
// };

export default Location;
