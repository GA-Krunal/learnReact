import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Login from './components/Login';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return ( 
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
