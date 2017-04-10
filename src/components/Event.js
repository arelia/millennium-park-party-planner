import React, { Component } from 'react';

class Event extends Component {
  render() {
    return (
      <div className="Event">
        <h2>Event Name</h2>
        <p>Event date</p>
        <p>Event location</p>
        <p>Event description</p>
        <p>Event image</p>
      </div>
    );
  }
}

export default Event;
