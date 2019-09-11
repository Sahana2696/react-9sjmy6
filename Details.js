import React, { Component } from 'react';
import { connect } from 'react-redux';


export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
      
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => {
        res.json()
     .then(mainResp=>{
      this.setState({data:mainResp})
    })})


  }

  render() {
  const data1=[1,2,3,4,5]
  const data2={
    id:'1',
    name:'sana',
    age:'22',
    details:{
      firstname:'Keerthi',
      lastname:'NS',
      dob:'Sept'
    }
  }
  console.log("Data in render-->",this.state.data);
    return (
      <div>
      <div className="detail">
      {
      Object.keys(this.state.data).map(detail=>{
        return<li> {this.state.data[detail]}</li>
      })
    
      }
      </div>
      <div>
      {
        data1.map(detail1=>{
          return<li>{detail1}</li>
        })
      }
      </div>
      <div>
      {
        Object.entries(data2).forEach(([key,value])=>
        {
       console.log("value",value)
        }
        )
      }
      </div>
      {
        
      }
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    Details: state
  };
}



export default connect(mapStateToProps, null)(Details);