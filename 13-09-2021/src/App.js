import './App.css';
import Form from './components/Form';
import Tabble from './components/Tabble';
import {Grid} from '@material-ui/core';

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    items: [],
    fName: '',
    lName: '',
  };

  updatefName = (event) => {
    this.setState({ fName: event.target.value });
  }
  updatelName = (event) => {
    this.setState({ lName: event.target.value });
  }
  updateItems = (e) => {
    e.preventDefault();
    if (this.state.fName === "" || this.state.lName === "") {
      alert("input can not be empty");
    }
    else {
      if (!Number.isNaN(Number(this.state.fName)) || !Number.isNaN(Number(this.state.lName))) {
        alert("invalid input ! numbers are not allowed");
      }
      else {
        const arr = this.state.items;
        const obj = { firstName: this.state.fName, lastName: this.state.lName }
        arr.push(obj);
        this.setState({
          items: arr,
          fName: "",
          lName: "",
        })
      }
    }
  }
  delItem = (el) => {
    this.state.items.splice(this.state.items.indexOf(el), 1);
    this.setState({
      items: this.state.items,
    });
  }

  render() {
    return (
      <Grid container direction="column" alignItems="center" justifyContent="center" >
        <Form updateItems={this.updateItems} fName={this.state.fName} lName={this.state.lName} updatefName={this.updatefName} updatelName={this.updatelName} />
        <Tabble itemsArr={this.state.items} delItem={this.delItem} />
      </Grid>
    )
  }
}
