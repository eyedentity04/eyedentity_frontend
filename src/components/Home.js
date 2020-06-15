import React, {useState} from "react";
import Navbar from "./Navbar";
import { saveHide } from "../actioncreators/Home";
import Add from "./Homepage/Add";
import Post from "./Homepage/Post"
import { connect } from "react-redux";

const Home = (props) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Navbar />
            <div className="container">
             <textarea
              readOnly
              onClick={() => setShowModal(true)}
              className="form-control mt-4 mb-4"
              rows={4}
              style={{
                resize: "none",
                backgroundColor: " white",
                cursor: "pointer",
              }}
              placeholder="Type something...."
              
            /></div>
      <Add        
        show={showModal}
        onHide={() => setShowModal(false)}
        succes={props.saveHide}
        
        />
      <Post />
    </div>
  );
};

const mapDispatchToProps = {saveHide : saveHide}

export default connect(null,mapDispatchToProps)(Home);

