
import './App.css';
import Counter from './Counter';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      mount:true,
      ignoreProp: 0,
      seed:40,
    }
  }
  mountCounter=()=>{this.setState({mount:true})}
  unMountCounter=()=>{this.setState({mount:false})}
  ignoreProp=()=>{this.setState({ignoreProp:Math.random()})}
  seedGenerator=()=>{this.setState({seed:Number.parseInt(Math.random()*100)})}
  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>mount counter</button>
        <button onClick={this.unMountCounter} disabled={!this.state.mount}>unmount counter</button>
        <button onClick={this.ignoreProp}>ignore prop</button>
        <button onClick={this.seedGenerator}>generate seed</button>
        {this.state.mount? 
        <Counter 
        ignore = {this.state.ignoreProp}
        seed = {this.state.seed}
        />:null }
       
      </div>
    )
  }
}

