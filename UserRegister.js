import React, { Component } from 'react';
import {Link,Route, BrowserRouter as Router} from 'react-router-dom';
import ReactDom from 'react-dom';
import RegisterUser from './RegisterUser';

class UserRegister extends Component {
    state = { }
    readUser()
    {
        fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
        "method": "GET",
        "headers": {
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": "apikey"
  }
})
.then(response => response.json())
.then(response => {
  this.setState({
    friends: response
  })
})
.catch(err => { console.log(err); 
});
    }
    render() { 
    return ( <div>
        <Router>
            <Link to="/registerUser">register user</Link>
            <Route
                path="/registerUser"
                component={RegisterUser}/>
            </Router>
    </div> )
    }
}
 
export default UserRegister;