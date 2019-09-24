import React, { Component } from 'react';

export default class View extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {
          this.props.data &&
          Object.keys(this.props.data).map(detail => {
            return <li>{this.props.data[detail]}</li>
          })
        }
      </div>

    )
  }
}