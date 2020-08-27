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
import data from "./dataItem.json";
//import image from './image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      dataItem: [...data],
      searchItem: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.Items = [...data];
  }
  handleChange(e) {
    this.setState({
      searchText: e.target.value.toLowerCase(),
    });
  }

  render() {
    const searchItems = this.Items.filter((b) =>
      b.title.toLowerCase().includes(this.state.searchText)
    );
    console.log(searchItems);


  

    return (
      <>
        <div className="App">
          <div className="grid">
            <h3><u>Learn Web Development and Computer Fundamentals</u></h3>
          </div>
        
          <div className="grid1">
              <TextField
              width="350px"
              placeholder="Search here"
              addonafter=""
              onChange={this.handleChange}
            />
            <SearchIcon height="20px" width="20px" /><br/>
             <h7>Login or Sign Up</h7>
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
        <div className="maingird">
          {searchItems.map((item) => (
            <div className="grid3" key={item.courseId}>
              <div className="title">
                {" "}
                <h6>
                  <b><u>{item.title}</u></b>
                </h6>
              </div>
              <div className="image">
                <img src={item.imgUrl} />
              </div>
              <p>{item.shortDescription}</p>
              <a href={item.url} className="alink">Link here....</a>
            </div>
          ))}
        </div>
        <div className="footer"></div>

    

        
      </>
    );
  }
}
export default App;
