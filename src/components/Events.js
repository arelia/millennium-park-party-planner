import React, { Component } from 'react';
import EventItem from '../components/EventItem.js';
var moment = require('moment');

class Events extends Component {
  render() {
    const eventsList = this.props.eventsList;

    const eventItems = Object
      .keys(eventsList)
      .map(key => {

        let eventDate = eventsList[key].endDate || eventsList[key].startDate;
        let displayEvent = moment(eventDate).isAfter(moment());

        return displayEvent ? <EventItem key={key} eventInfo={eventsList[key]}/> : null
      })

    return (
      <ul className="events">
        {eventItems}
      </ul>
    );
  }
}

export default Events;
