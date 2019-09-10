import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { username: '', password: '' }
  }

  
  render() {
    return (

      <div className="col-lg-8 detail">

        <h1> Register</h1>
        <br />
        <label> Name:</label>
        <input type="text"
          value={this.state.name}
          className="form-control" />
        <br />

        <label> Email:</label>
        <input type="email"
          value={this.state.email}
          className="form-control" />
        <br />

        <label> Mobile:</label>
        <input type="text"
          value={this.state.mobile}
          className="form-control" />
        <br />

        <button type="submit"
          className="btn btn-info"
          onClick={this.onSubmit.bind(this)}>Submit</button>

        <button type="button"
          className="btn btn-info">Clear</button>
      </div>
    )

  }
}