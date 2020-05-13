import React, { useState } from "react";
import "./Style.css";
import { connect } from "react-redux";
import Attach from "../Img/paperclip.svg";
import {add} from "../../actioncreators/Home"

const Add = (props) => {
  const [data, setData] = useState({
    description: "",
  });

  const handleAdd = () => {
    props.add(data);
  };

  const handleChange = (event) => {
    let { name,value } = event.currentTarget;
    setData({
      ...data,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="form-group">
        <textarea
          className="form-control mt-5"
          id="description"
          name="description"
          rows={6}
          value={data.description}
          placeholder="Type something...."
          onChange={handleChange}
        />
        <img src={Attach} alt=" " style={{ width: "15px", marginBottom: "10px" }}  />
      </div>

      <br />
      <button type="button" class="btn btn-info" onClick={handleAdd}>
        Submit
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
      viaLogin: state.login.viaLogin
  }
}
const mapDispatchToProps = { add: add };

export default connect(mapStateToProps, mapDispatchToProps)(Add);
