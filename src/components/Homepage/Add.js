import React, { useState } from "react";
import "./Style.css"
import {connect} from "react-redux"
import Attach from "../Img/paperclip.svg"

const Add = (props) => {
  const [data, setData] = useState({
      text: "",
  });

  const handleAdd = () => {
      props.add(data);
  }
  const handleChange = (event) => {
      let{id, defaultValue, checked} = event.currentTarget;
  }

  return (
    <div className="container">
      <div className="form-group">
        <textarea
          className="form-control mt-5"
          id="add"
          rows={6}
          defaultValue={""}
          placeholder="Type something...."
          onChange={handleChange}
        />
      </div>
      <img src={Attach} style={ {width : "15px", marginBottom : "10px"}}/>
      <br/>
      <button type="button" class="btn btn-info" onClick={handleAdd} >Submit</button>
    </div>
  );
};

const mapDispatchToProps = {Add};

export default connect(null, mapDispatchToProps)(Add);
