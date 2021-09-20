import './App.css';
import Form from './components/Form';
import Tabble from './components/Tabble';
import { Grid } from '@material-ui/core';
import React from 'react'
import { useState } from 'react';

export default function App() {

  const [items, setItems] = useState([]);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");

  const updatefName = (event) => {
    setfName(event.target.value);
  }
  const updatelName = (event) => {
    setlName(event.target.value);
  }
  const updateItems = (e) => {
    e.preventDefault();
    if (fName === "" || lName === "") {
      alert("input can not be empty");
    }
    else {
      if (!Number.isNaN(Number(fName)) || !Number.isNaN(Number(lName))) {
        alert("invalid input ! numbers are not allowed");
      }
      else {
        const arr = items;
        const obj = { firstName: fName, lastName: lName }
        arr.push(obj);
        setItems(arr);
        setfName("");
        setlName("");
      }
    }
  }
  const delItem = (el) => {
    setItems(items.filter(e=>e!==el)); 
  }
 
  return (
    <Grid container direction="column" alignItems="center" justifyContent="center" >
      <Form updateItems={updateItems} fName={fName} lName={lName} updatefName={updatefName} updatelName={updatelName} />
      <Tabble items={items} delItem={delItem}/>
    </Grid>
  )
}



