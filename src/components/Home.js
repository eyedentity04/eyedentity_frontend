import React, {useState} from "react";
import Navbar from "./Navbar";

import Add from "./Homepage/Add";
import Post from "./Homepage/Post";

const Home = () => {
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
        onHide={() => setShowModal(false)}/>
      <Post />
    </div>
  );
};

export default Home;

// const Add = (props) => {
//   const [modalShow, setModalShow] = useState(false);
  

//   return (
 
//           <div className="container">
//             <textarea
//               readOnly
//               onClick={() => setModalShow(true)}
//               className="form-control mt-4 mb-4"
//               rows={4}
//               style={{
//                 resize: "none",
//                 backgroundColor: " white",
//                 cursor: "pointer",
//               }}
//               placeholder="Type something...."
              
//             />

//             <MyVerticallyCenteredModal
//               show={modalShow}
//               onHide={() => setModalShow(false)}
//             />

  

//           </div>
    
//   );
// };