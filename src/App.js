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
import "bootstrap/dist/css/bootstrap.min.css";
import AdvdataItem from "./advdataitem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      dataItem: [...data],
      searchItem: [],
      openModal: false,
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
            <h3>
              <u>Learn Web Development and Computer Fundamentals</u>
            </h3>
          </div>

          <div className="grid1">
            <TextField
              width="350px"
              placeholder="Search here"
              addonafter=""
              onChange={this.handleChange}
            />
            <SearchIcon height="20px" width="20px" />
            <br />
            <h6>Login or Sign Up</h6>
          </div>
        </div>
        <div className="cbGroup">
          <div className="grid2">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Aws"
              />
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Machine learning"
              />
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Core-Java "
              />
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Angular-js"
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
                  <b>
                    <u>{item.title}</u>
                  </b>
                </h6>
              </div>
              <div className="image">
                <img src={item.imgUrl} alt="" />
              </div>
              <p>{item.shortDescription}</p>
              <AdvdataItem
                title={item.title}
                id={item.courseId}
                rating={item.providerRatings}
                shortDescription={item.shortDescription}
                duration={item.duration}
                durationPeriod={item.durationPeriod}
                provider={item.provider}
                author={item.author}
                level={item.level}
                medium={item.medium}
                language={item.language}
                category={item.category}
                programType={item.programType}
                tags={item.tags}
                link={item.url}
              ></AdvdataItem>
            </div>
          ))}
        </div>
        <div className="footer"></div>
      </>
    );
  }
}
export default App;
