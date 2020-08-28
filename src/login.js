import React, { Component } from "react";

import { Button } from "react-bootstrap";
import Modal from "react-bootstrap4-modal";
import "./App.css";
import {
  TextField,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";




class Login extends Component {
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
        <Button onClick={this.OpenModal} className="alink">
          Login
        </Button>
        <Modal
          visible={this.state.openModal}
          onClickBackdrop={this.modalBackdropClicked}
        >
          <div className="modal-header">
            <h5 className="modal-title">Login</h5>
          </div>

          
            <div className="gird">
              Username:
              <TextField
                id="username"
                label="Username"
                type="email"
                fullWidth
                autoFocus
                required
              />
              Password:
              <TextField
                id="username"
                label="Password"
                type="password"
                fullWidth
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
          

          <div className="modal-footer">
            <Button
              type="button"
              className="btn btn-primary"
              onClick={this.OpenModal}
            >
              Login
            </Button>
          </div>
        </Modal>
      </>
    );
  }
}

export default Login;
