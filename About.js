import React, { Component } from 'react';

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,

    }
  }
  onShow() {
    this.setState({ show: true })
  }
  onHide() {
    this.setState({ show: false })
  }
  render() {
    return (
      <div className="detail">
        <h1 className="head">About</h1>
        <p>This is the page where you can enroll by registering with your credentials.<br />
          Then you can login by giving your username and password.</p>

        <div>
          <button type="button" onClick={this.onShow.bind(this)} className="btn btn-info ">Show</button>

          <button type="button" onClick={this.onHide.bind(this)} className="btn btn-info">Hide</button>

          {
            this.state.show &&

            <div>
              <p> Atos Syntel is a division of Atos and a multinational provider of integrated technology and business services. The company is led by Rakesh Khanna. Atos Syntel was created by the acquisition of Syntel, Inc. by Atos S.E, which was announced on July 22, 2018 and completed on October 9, 2018.</p>
            </div>

          }
        </div>
      </div>
    )
  }
}