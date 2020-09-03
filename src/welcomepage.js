import React, { Component } from 'react';

class WelcomePage extends Component{
    render(){
        const {username}= this.props.match.params;
        return(
            <div>
                <h3>Welcome{this.props.username}</h3>
            </div>

        );
    }
}
export default WelcomePage;