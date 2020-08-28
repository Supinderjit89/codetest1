import React, { Component }  from 'react';

import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap4-modal';


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
            <p>{this.props.id}</p>
        <p>  {this.props.rating}</p>
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