import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Event from './components/Event.js';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <Event />
      </div>
    );
  }
}

export default App;
