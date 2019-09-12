import React, { Component } from 'react';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errorMsg: false
    }
  }
  handleUsername(e) {
    this.setState({
      username: e.target.value,
    });
  };

  handlePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }
  onSubmit() {
    if (this.state.username == "test" && this.state.password == "test") {
      this.setState({ errorMsg: false })
    }
    else {
      this.setState({ errorMsg: true })
    }
  }
  onClear() {
    this.setState({
      username: "",
      password: ""
    });
  }
  render() {
    return (

      <div className="col-lg-8 ">
        <h1> Login Page</h1><br />
        {
          this.state.errorMsg &&
          <div className="alert alert-danger">
            <strong>ERROR!</strong> Invalid Username or Password.
        </div>
        }
        <label> UserName:</label>
        <input type="text"
          value={this.state.username}
          className="form-control"
          onChange={this.handleUsername.bind(this)} />
        <br />

        <label> Password:</label>
        <input type="password"
          value={this.state.password}
          className="form-control"
          onChange={this.handlePassword.bind(this)} />
        <br />

        <div className="pull-right">
          <button type="button"
            className="btn btn-primary"
            onClick={this.onClear.bind(this)}>Clear</button>

          <button type="button"
            className="btn btn-primary"
            onClick={this.onSubmit.bind(this)}>Login</button>
        </div>
      </div>
    )
  }
}



