import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props){
    super(props);
    this.state={username:'',password:''}
  }

render(){
  return(
    
    <div className="col-lg-8 detail">
    <h1> Login Page</h1><br/>
    <label> UserName:</label>
    <input type="text" value={this.state.username} className="form-control"/>

     <label> Password:</label>
    <input type="password" value={this.state.password} className="form-control"/>
    <br/>
    
    <button type="button" className="btn btn-info">Login</button>
    </div>

  )

}
}