import React, { Component } from 'react';
import { connect } from 'react-redux';
import View from './View';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }
  handleChange(event) {
    console.log("check", event.target)
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(res => {
        res.json()
          .then(mainResp => {
            this.setState({ data: mainResp })
          })
      })
  }
  render() {
    console.log("Data in render-->", this.state.data);
    return (
      <div>
        <div className="detail">
          
          {
            this.state.data && this.state.data.map(detail => {
              return <div>
                <View data={detail} />
              </div>
            }
            )
          }
          <div>
      <h3>{this.props.SignUp.name}</h3>
        </div>
        </div>
      </div >
    );
  }
}
function mapStateToProps(state) {
  return {
   state
  };
}

export default connect(mapStateToProps, null)(Details);