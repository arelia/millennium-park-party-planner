import React, { Component } from 'react';
import EventItem from '../components/EventItem.js';

class Events extends Component {
  render() {
    const eventsList = this.props.eventsList;

    const eventItems = Object
      .keys(eventsList)
      .map(key =>
        <EventItem key={key} eventInfo={eventsList[key]}/>
      )

    return (
      <ul className="events">
        {eventItems}
      </ul>
    );
  }
}

export default Events;
