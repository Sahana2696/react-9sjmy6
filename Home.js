import React, { Component } from 'react';
import View from './View';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("Home Will Mount")
  }
  componentDidMount() {
    console.log("Home Did Mount")
  }
  componentWillUpdate() {
    console.log("Home componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("Home componentDidUpdate");
  }
  render() {
    return (
      <div className="detail">
        <h1> Welcome </h1>
        <View data={{id:1,name:"hello"}}/>
        
      </div>
    )

  }
}
