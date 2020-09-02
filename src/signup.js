import React, { Component } from "react";

import { Button, Form } from "react-bootstrap";
import Modal from "react-bootstrap4-modal";
import "./App.css";
//import { TextField, FormControlLabel, Checkbox } from "@material-ui/core";

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
            <h5 className="login-title"> Create new Login</h5>
          </div>
          <Form>
          <div className="mainlogin">
            
            <div className="signup-grid">
              
            <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                
              
            </div>
          </div>
          <div className="modal-footer">
          <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="./login.js">sign in?</a>
                </p>
          </div>
          </Form>
        </Modal>
      </>
    );
  }
}

export default SignUp;
