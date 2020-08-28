import React, { Component }  from 'react';

import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap4-modal';
import "./App.css";


class AdvdataItem extends Component{

    constructor(props) {
        super(props);
        this.state = {
          openModal : false,
          
        };
    }
/*componentDidMount(){
    fetch('./advdataItem.json '+ item.id){
    .then((response)=> response.json())
    .then((responseJson)=>{
        data1=responseJson;
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(data1)
        })
    })
    catch()
} */



        OpenModal=()=>{

            this.setState({
              openModal:!this.state.openModal,//Toggle
            })
          }


    render() {
        

    return(
        <>
        <Button onClick={this.OpenModal} className="alink">More Info...</Button>
        <Modal visible={this.state.openModal} onClickBackdrop={this.modalBackdropClicked}>
        
        <div className="modal-header" >

         <h5 className="modal-title">{this.props.title}</h5>
        </div>
        <div className="modal-body">
            <div className="left-grid">
       <b> Duration Time:</b><br/> {this.props.duration} month 
       <hr/>
        <b> Rating:</b> {this.props.rating}
        <hr/>
         <b> Provider: </b>  {this.props.provider}
         <hr/> 
        <b> Category</b> :<br/>{this.props.category}
        </div><div className="right-grid">
            <p>{this.props.shortDescription}</p>
            <a href={this.props.link}>Click Here..</a>
        </div>
        </div>
        <div className="modal-footer">
         
          <Button type="button" className="btn btn-primary" onClick={this.OpenModal}>
            Close
          </Button>
          
        </div> 
    
      
      </Modal>
      </>
    );
}
    }


    export default AdvdataItem;