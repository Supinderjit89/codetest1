import React, { Component } from "react";
//import Checkbox from "@material-ui/core/Checkbox";
import SearchIcon from "@material-ui/icons/Search";
//import FormLabel from '@material-ui/core/FormLabel';
//import FormControl from '@material-ui/core/FormControl';
//import FormGroup from "@material-ui/core/FormGroup";
//import FormControlLabel from "@material-ui/core/FormControlLabel";
//import FormHelperText from '@material-ui/core/FormHelperText';
import { Form } from "react-bootstrap";
import "./App.css";
import { TextField } from "@material-ui/core";
import data from "./dataItem.json";
//import image from './image';
import "bootstrap/dist/css/bootstrap.min.css";
import AdvdataItem from "./advdataitem";
import Login from "./login";
import SignUp from "./signup";
//import Checkboxes from'./checkbox';
import checkboxes from "./checkbox";

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

  //Search handled
  handleChange(e) {
    this.setState({
      searchText: e.target.value.toLowerCase(),
    });
  }

  //Checkbox handle
  handlechanged(event){
    this.setState({
checkBoxes : event.target.name
    })
  }

  render() {
    const searchItems = this.Items.filter((b) =>
      b.title.toLowerCase().includes(this.state.searchText)
    );
    

    

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
            <br />
            <Login />
            <SignUp />
          </div>
        </div>
        <div className="cbGroup">
          {checkboxes.map((item) => (
            <div className="grid2">
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label={item.name} 
                name={item.name}
                onClick={this.handlechanged}
                />
              </Form.Group>
            </div>
          ))}
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
