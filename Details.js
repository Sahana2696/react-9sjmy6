import React, { Component } from 'react';
import { connect } from 'react-redux';


export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="detail">
      
      <h1>
      {
        Object.keys(this.props.Details).map(key=>{
          return <li>{this.props.Details[key]}</li>
       
        })
        
      }
      </h1>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Details:state
  };
}



export default connect(mapStateToProps, null)(Details);