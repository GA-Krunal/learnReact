import './App.css';
import Form from './components/Form';
import Table from './components/Table';

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    items: [],
    newItem: '',
  };

  updateValue = (event) => {
    this.setState({ newItem: event.target.value });
  }
  updateItems = (e) => {
    e.preventDefault()
    let arr = this.state.items;
    if (this.state.newItem !== "") {
      arr.push(this.state.newItem);
      this.setState({
        items: arr,
        newItem: "",
      })
    }
    else {
      alert("input can not be empty")
    }
  }
  render() {
    return (
      <div>
        <Form updateItems={this.updateItems} val={this.state.newItem} updateValue={this.updateValue} />
        <Table itemsArr={this.state.items} />   
      </div>
    )
  }
}



