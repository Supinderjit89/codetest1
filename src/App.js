import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import SearchIcon from "@material-ui/icons/Search";
//import FormLabel from '@material-ui/core/FormLabel';
//import FormControl from '@material-ui/core/FormControl';
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
//import FormHelperText from '@material-ui/core/FormHelperText';

import "./App.css";
import { TextField } from "@material-ui/core";

class App extends Component {
  render() {
    return (
      <>
        <div className="App">
          <div className="grid">
            <h1>Hello world</h1>
          </div>
          <hr></hr>
          <div className="grid1">
            <TextField width="350px" placeholder="Search here" addonAfter="" />
            <SearchIcon height="20px" width="20px" />
          </div>
        </div>
        <div className="cbGroup">
          <div className="grid2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Gilad Gray"
              />
                <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Gilad Gray"
              />
                <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Gilad Gray"
              />
                <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Gilad Gray"
              />
            </FormGroup>

          
          </div>
        </div>
      </>
    );
  }
}
export default App;
