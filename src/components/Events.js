import React, { Component } from 'react';
import EventItem from '../components/EventItem.js';
var moment = require('moment');

class Events extends Component {
  render() {
    const eventsList = this.props.eventsList;
    let today = moment().toISOString();


    const eventItems = Object
      .keys(eventsList)
      .map(key => {

        let eventDate = eventsList[key].endDate || eventsList[key].startDate;
        let eventDateObject = moment(eventDate).toISOString();

        return eventDateObject > today ? <EventItem key={key} eventInfo={eventsList[key]}/> : ''
      })

    return (
      <ul className="events">
        {eventItems}
      </ul>
    );
  }
}

export default Events;
