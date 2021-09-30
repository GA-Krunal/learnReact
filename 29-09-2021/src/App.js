import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import About from './components/About';
import AddUser from './components/AddUser';
import Edit from './components/Edit';
import View from './components/View';

function App() {
  const [items, setItems] = useState([])
  const [edIndex, setEdIndex] = useState(0);
  const [edItem, setEdItem] = useState({});
  const [viewItem, setViewItem] = useState({});

  const getData = (fname, lname, age, email, photo) => {
    if (fname.length < 1 || lname.length < 1 || age.length < 1 || email.length < 1 || photo.length < 1) {
      alert("input can not be empty")
      return
    }
    let obj = { firstName: fname, lastName: lname, userAge: age, userEmail: email, userPhoto: photo };
    let arr = items;
    arr.push(obj);
    setItems(arr);
  }
  const updateData = (fname, lname, age, email, photo) => {
    let obj = { firstName: fname, lastName: lname, userAge: age, userEmail: email, userPhoto: photo };
    let arr = items;
    arr.splice(edIndex, 1, obj)
    setItems(arr);
  }
  const editData = (el) => {
    setEdIndex(items.indexOf(el));
    setEdItem(el);
  }
  const deleteData = (el) => {
    setItems(items.filter(e => e !== el));
  }
  const viewData = (el) => {
    setViewItem(el);
  }
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard items={items} viewData={viewData} editData={editData} deleteData={deleteData} />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/edit">
            <Edit edItem={edItem} updateData={updateData} />
          </Route>
          <Route exact path="/view">
            <View viewItem={viewItem} />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
          <Route exact path="/AddUser">
            <AddUser getData={getData} />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
