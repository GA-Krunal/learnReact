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
    e.preventDefault();
    let arr = this.state.items;
    if (this.state.newItem === "") {
      alert("input can not be empty");
    }
    else {

      if (arr.indexOf(this.state.newItem) !== -1) {
        alert("task already exist in table");
      }
      else {
        arr.push(this.state.newItem);
        this.setState({
          items: arr,
          newItem: "",
        })
      }
    }
  }
  delItem = (name) => {
    this.state.items.splice(this.state.items.indexOf(name), 1);
    this.setState({
      items: this.state.items,
    });
  }
  
  render() {
    return (
      <div>
        <Form updateItems={this.updateItems} val={this.state.newItem} updateValue={this.updateValue} />
        <Table itemsArr={this.state.items} delItem={this.delItem}/>
      </div>
    )
  }
}
