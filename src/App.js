import React, { Component } from 'react';
// import logo from './logo.svg';
import Events from './components/Events.js';
import base from './base.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.addEvent = this.addEvent.bind(this);
    this.rsvpList = this.rsvpList.bind(this);

    this.state = {
      eventsList: {},
      rsvpList: {}
    };
  }

  componentWillMount() {
    this.ref = base.syncState(
      `eventsList`,
      { context: this, state: 'eventsList'}
    );
  }

  compoentWillUnmount(){
    base.removeBinding(this.ref);
  }

  addEvent(newEvent) {
    const eventsList = {...this.state.eventsList};
    const timestamp = Date.now();

    eventsList[`event-${timestamp}`] = newEvent;

    this.setState({eventsList});
  }

  rsvpList(rsvps, email) {
    const rsvpList = {...this.state.rsvpList};

    rsvpList[email] = rsvps;

    this.setState({rsvpList});
  }

  render() {
    const eventsList = this.state.eventsList;

    return (
      <div className="App">
        <Events eventsList={eventsList} rsvpList={this.rsvpList} />
      </div>
    );
  }
}

export default App;
