import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React-1234</h2>
        </div>
        <p className="App-intro">
          <Link to="/table">Table</Link>
          <br/>
          <Link to="/list">List</Link>
          <br/>
        </p>
      </div>
    );
  }
}

export default App;
