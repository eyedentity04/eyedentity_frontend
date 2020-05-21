import React, {Component} from "react"
import axios from 'axios'
import img1 from '../Img/img1.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class Postprofile extends Component {
    constructor(){
      super()
      this.state ={
        data : {}
      }
    }
    componentDidMount(){
        const user = JSON.parse(localStorage.getItem('user'))
        
        axios.get(`http://api.riyofirsan.com/post/test/${user.id}`)
        .then((response) => {
          this.setState({data : response.data})
          console.log(response)
        })
      }
    render() {
        let user = Object.assign({},this.state.data)
        return(
            <div className="container">
               <div class="card mt-3 w-100" style={{borderRadius:"10px"}}>
          <div class="card-header">
            <div className="d-flex flex-row">
            <img src={img1} style={{ width: "50px", borderRadius: "50%" }} />
            <div className="d-inline-flex flex-column">
            <p className="lead font-weight-bold mb-0 ml-2"></p>
            <p className="text-muted mb-0 ml-2"></p>
            </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text"></p>
            <img
              style={{ height: "400px" }}
              className="card-img-top"
            //   src={`http://api.riyofirsan.com/${item.image}`}
              alt=""
            />
            <button type="submit"
              className="btn btn-info mt-3"
              style={{ backgroundColor: "#8D7B65" }}> 
            <FontAwesomeIcon icon={faThumbsUp} className="fa-1x mx-auto" />
            &nbsp;
            Like
            </button>
          </div>
          
        </div>
      </div>
        )
    }
     
    }

export default Postprofile;