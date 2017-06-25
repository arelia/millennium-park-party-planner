import React, { Component } from 'react';
// import logo from './logo.svg';
import Events from './components/Events.js';
import base from './base.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.addEvent = this.addEvent.bind(this);

    this.state = {
      eventsList: {}
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

  render() {
    const eventsList = this.state.eventsList;

    return (
      <div className="App">
        <Events eventsList={eventsList} />
      </div>
    );
  }
}

export default App;
