import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Events from './components/Events.js';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {displaySidebar: true};
  }

  render() {
    const displaySidebar = this.state.displaySidebar;

    return (
      <div className="App">
        <Header />
        {displaySidebar && <Sidebar />}
        <Events />
      </div>
    );
  }
}

export default App;
