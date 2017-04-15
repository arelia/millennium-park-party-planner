import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Event from './components/Event.js';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {displaySidebar: true};
  }
  render() {
    const displaySidebar = this.state.displaySidebar;
    let sidebar = null;
    if (displaySidebar) {
      sidebar = <Sidebar/>
    }
    return (
      <div className="App">
        <Header />
        {sidebar}
        <Event />
      </div>
    );
  }
}

export default App;
