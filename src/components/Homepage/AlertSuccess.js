import React,{useState} from "react";
import { connect } from "react-redux";
import { successHide } from "../../actioncreators/Home";
import { Alert } from "react-bootstrap";


const Success = (props) => {
    const [isShow, setIsShow] = useState(true);
  return (
    <Alert variant="danger" show = {props.show} onHide = {props.successHide} onClick = {() => setIsShow(false)} dismissible >
      <Alert.Heading>
          test
      </Alert.Heading>

      <p >
        {props.message}
      </p>
    </Alert>
  );
};

const mapStateToProps = (state) => {
  show: state.homeUser.success.show;
  message: state.homeUser.success.show;
};
const mapDispatchToProps = {
  successHide: successHide,
};

export default connect(mapStateToProps, mapDispatchToProps)(Success);
