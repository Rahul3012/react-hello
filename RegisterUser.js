import React, { Component } from 'react';

class RegisterUser extends Component {
    state = { 
        name:"This is ",
        completeName:''
     }
     completeString(event)
     {
        this.setState({
            completeName: event.target.value
        })
     }
    render() { 
    return ( <div>
        <p><input onChange={this.completeString.bind(this)} type="text"/></p>
        <p><button>Register User</button></p></div> );
    }
}
 
export default RegisterUser;