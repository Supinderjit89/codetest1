import React, { Component } from "react";

import { Button } from "react-bootstrap";
import Modal from "react-bootstrap4-modal";
import "./App.css";
import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";
//import {FacebookLoginButton} from 'react-social-login-buttons';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      err:''
    };
  }

  OpenModal = () => {
    this.setState({
      openModal: !this.state.openModal, //Toggle
    });
  };
login(e){
  e.preventDefault();
  var username=e.target.elements.username.value;
  var password=e.target.elements.password.value;
  if(username === "admin" && password ==="12345"){
      this.props.push('/welcomepage.js');
  }
  else{
    this.setState({
      err:'Invalid'
    })
  }
}
  render() {

    let format={
      color:"red"
    };

    return (
      <>
      
      

    
        <Button onClick={this.OpenModal} variant="link">
          Login
        </Button>
        <Modal
          visible={this.state.openModal}
          onClickBackdrop={this.modalBackdropClicked}
        >
          <div className="modal-header">
            <h5 className="login-title"> User Login</h5>
          </div>
          <form method="post" onSubmit={this.login.bind(this)}>
          <div className="mainlogin">
         
              <div className="loginimg">
                <img
                  src="/image/loginimg.png"
                  alt="loginimage"
                  className="imagesize"
                />
              </div>
              <span style={format}> {this.state.err !==''? this.state.err:''}</span>
              <div className="login-grid">
                <TextField
                  
                  label="Username"
                  type="text"
                  name="username"
                  required
                />

                <TextField
                
                  label="Password"
                  type="password"
                  name="password"
                  required
                />
                <FormControlLabel
                  control={<Checkbox color="primary" />}
                  label="Remember me"
                />
                <Button
                  disableFocusRipple
                  disableRipple
                  style={{ textTransform: "none" }}
                  variant="text"
                  color="primary"
                >
                  Forgot password ?
                </Button>
              </div>
            </div>
            <div className="text-center">
              <input type="submit" className="btn btn-dark btn-block" value="Login"/>
                
              
              <Button
                type="button"
                className="btn btn-dark btn-block"
                onClick={this.OpenModal}
              >
                Cancel
              </Button>
              <div>
                or Create Your Account <a href={"./signup"}>SignUp</a>
              </div>
          
          </div>
          </form> 
        </Modal>
      </>
    );
  }
}

export default Login;
