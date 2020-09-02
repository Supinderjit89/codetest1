
import React, { Component } from "react";

import { Button } from "react-bootstrap";
import Modal from "react-bootstrap4-modal";
import "./App.css";
import {
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";







class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  OpenModal = () => {
    this.setState({
      openModal: !this.state.openModal, //Toggle
    });
  };

  render() {
    

    return (
      <>
        <Button onClick={this.OpenModal} variant="link">
          Sign up
        </Button>
        <Modal
          visible={this.state.openModal}
          onClickBackdrop={this.modalBackdropClicked}
        >
          <div className="modal-header">
            <h5 className="login-title"> User Login</h5>
          </div>
<div className="mainlogin">
          <div className="loginimg">
          <img src="/image/loginimg.png" alt="loginimage" className="imagesize"/>
              
          </div>
            <div className="login-grid">
            
              <TextField
                id="username"
                label="Username"
                type="email"
                
                
                
                required
              />
             
              <TextField
                id="username"
                label="Password"
                type="password"
            
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
          <div className="modal-footer">
            <Button
              type="button"
              className="btn btn-primary"
              onClick={this.OpenModal}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="btn btn-primary"
          
            >
              Login
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default SignUp;
