import React, { Component } from 'react'

export default class EventBinding extends Component {

    constructor(){
        super();
        this.state= {count:0}//can't use this inside function body
    }
    incrementCount(){
        alert("I increased the count yayyyyyy")
        this.setState({count:this.state.count+1})

    }
  render() {
    return (
      <div>
        <h1>EventBinding done by Anushka's app with count: {this.state.count}</h1>
        <button type='button' onClick={()=>this.incrementCount()}>Increment Count</button>
     
        
      </div>
    );
  }
}
