import React, { Component } from "react";
import {Formik} from 'formik'
import "./Add.css";
import axios from "axios"
// import { connect } from "react-redux";
// import { add } from "../../actioncreators/Home";
import {Form} from 'react-bootstrap'

class Add extends Component {
  render(){
    return (
      <Formik
        initialValues={{
          description : '',
          image : null
        }}
        onSubmit ={(values)=>{
          let formData = new FormData();

          formData.append('description',values.description)
          formData.append('image',values.image)

          const user = JSON.parse(localStorage.getItem("user"));
          const token = user.token;
          const res = axios.post("https://eyedentity-socialmedia.herokuapp.com/post/create",formData,{
            headers : {
              'token' : token
            }
          })
          console.log(res)
          alert("aladin mother fucker")
          console.log(formData.get('description'))
          console.log(formData.get('image'))
        }}
      >
        {props => (
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
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={(event)=>{
                  props.setFieldValue('image',event.currentTarget.files[0])
                }}
              />
              </div>
              <button type="submit" className="save" >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    )
  }
}
export default Add


// const Add = (props) => {
//   const [data, setData] = useState({
//     description: "",
//     image : null
//   });

//   const handleAdd = () => {
//     props.add(data);
//     console.log(data)
//   };

//   const handleChange = (event) => {
//     let { name, value } = event.currentTarget;
//     setData({
//       ...data,
//       [name]: value,
    
//     });
//   };

//   const handleImage = (event) => {
//     let {image,value} = event.currentTarget
//     setData({
//       ...data,
//       [image] : value
//     })
//   }

//   return (
//     <div className="container">
//       <div className="form-group">
//         <textarea
//           className="form-control mt-5"
//           id="description"
//           name="description"
//           rows={6}
//           style={{ resize: "none" }}
//           value={data.description}
//           placeholder="Type something...."
//           onChange={handleChange}
//         />

//         <input
//           type="file"
//           className="form-control"
//           id="image"
//           name="image"
//           value={data.image}
//           onChange={handleChange}
//           accept="image/x-png,image/gif,image/jpeg" 
//         />

//       </div>
//       <button type="button" class="btn btn-info" onClick={handleAdd}>
//         Submit
//       </button>
//     </div>
//   );
// };

// const mapDispatchToProps = { add: add };

// export default connect(null, mapDispatchToProps)(Add);
