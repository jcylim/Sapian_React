import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route } from "react-router-dom";
import './App.css';

import HomePage from './components/Main/HomePage';
import LoginPage from './components/Login/LoginPage'; 

class App extends Component {
  render() {
    return (
      <div className='ui container'>
        <Route path="/" exact component={HomePage} />
        <Route path="/login" exact component={LoginPage} />
      </div>
    );
  }
}

export default App;