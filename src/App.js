import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Event from './components/Event.js';
import Header from './components/Header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="App">
        <p>{this.state.date.toLocaleTimeString()}</p>
        <Header />
        <Event />
      </div>
    );
  }
}

export default App;
