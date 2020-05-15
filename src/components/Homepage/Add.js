import React, { useState } from "react";
import "./Add.css";
import { connect } from "react-redux";
import { add } from "../../actioncreators/Home";

const Add = (props) => {
  const [data, setData] = useState({
    description: "",
    image:[]
  });

  const handleAdd = () => {
    props.add(data);
    console.log(data)
  };

  const handleChange = (event) => {
    let { name, value } = event.currentTarget;
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
          style={{ resize: "none" }}
          value={data.description}
          placeholder="Type something...."
          onChange={handleChange}
        />

        <input
          type="file"
          className="form-control"
          id="image"
          name="image"
          value={data.image}
          onChange={handleChange}
          accept="image/x-png,image/gif,image/jpeg" 
        />

      </div>
      <button type="button" class="btn btn-info" onClick={handleAdd}>
        Submit
      </button>
    </div>
  );
};

const mapDispatchToProps = { add: add };

export default connect(null, mapDispatchToProps)(Add);
