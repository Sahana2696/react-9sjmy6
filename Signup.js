import React, { Component } from 'react';
import Details from './Details';
import { connect } from 'react-redux';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      mobile: '',
      email: ""
    }
  }

  handleName(e) {
    this.setState({
      name: e.target.value,
    });
  };

  handleMobile(e) {
    this.setState({
      mobile: e.target.value,
    });
  }
  handleEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onSubmit(){
    this.props.sendData(this.state)
  }

  onClear() {
    this.setState({
      name: "",
      mobile: "",
      email: ""
    });
  }
  render() {
    return (

      <div className="col-lg-8">

        <h1> Register</h1>
        <br />
        <label> Name:</label>
        <input type="text"
          value={this.state.name}
          className="form-control"
          onChange={this.handleName.bind(this)} />
        <br />

        <label> Email:</label>
        <input type="email"
          value={this.state.email}
          className="form-control"
          onChange={this.handleEmail.bind(this)} />
        <br />

        <label> Mobile:</label>
        <input type="text"
          value={this.state.mobile}
          className="form-control"
          onChange={this.handleMobile.bind(this)} />
        <br />

        <button type='button'
          role='button'
          className="btn btn-primary"
          onClick={this.onSubmit.bind(this)}>SendData</button>

        <button type="button"
          className="btn btn-primary"
          onClick={this.onClear.bind(this)}>Clear</button>
      </div>
    )

  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendData: (details) => dispatch({ type: 'SIGNUP_DETAILS', details }),
    

  }
}
function mapStateToProps(state) {
  return { state };
}


export default connect(mapStateToProps, mapDispatchToProps)(Signup);
