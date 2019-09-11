import React, { Component } from 'react';
// import { connect } from 'react-redux';


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
    const data = []
    // const data2={
    //   id:'1',
    //   name:'sana',
    //   age:'22',
    //   details:{
    //     firstname:'Keerthi',
    //     lastname:'NS',
    //     dob:'Sept'
    //   }
    // }
    console.log("Data in render-->", this.state.data);
    return (

      <div>
        <div className="detail">
          {
            this.state.data && this.state.data.map(detail => {
              return <div><input type="checkbox" value={detail.title} onChange={this.handleChange.bind(this)} />{detail.title}</div>
            }
            )
          }

        </div>
      </div >
    );
  }
}
// function mapStateToProps(state) {
//   return {
//     Details: state
//   };
// }

// export default connect(mapStateToProps, null)(Details);