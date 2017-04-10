import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Event from './components/Event.js';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Event />
      </div>
    );
  }
}

export default App;
