import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Courses from './Components/Courses';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Timetables Demo</h1>
        </header>
        <Courses />
      </div>
    );
  }
}

export default App;
