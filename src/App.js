import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Events from './components/Events.js';
import EventsForm from './components/EventsForm.js';
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.addEvent = this.addEvent.bind(this);
    this.state = {
      displaySidebar: true,
      eventsList: {}
    };
  }

  addEvent(newEvent) {
    const eventsList = {...this.state.eventsList};
    const timestamp = Date.now();

    eventsList[`event-${timestamp}`] = newEvent;

    this.setState({eventsList});
  }

  render() {
    const displaySidebar = this.state.displaySidebar;
    const eventsList = this.state.eventsList;

    return (
      <div className="App">
        <Header />
        {displaySidebar && <Sidebar />}
        <Events eventsList={eventsList} />
        <EventsForm addEvent={this.addEvent} />
      </div>
    );
  }
}

export default App;
