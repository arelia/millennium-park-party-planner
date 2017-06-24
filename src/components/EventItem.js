import React, { Component } from 'react';
import AddToCalendar from 'react-add-to-calendar';

class EventItem extends Component {
  render() {
    const eventInfo = this.props.eventInfo;

    let calendarEvent = {
      title: 'Sample Event',
      description: 'This is the sample event provided as an example only',
      location: 'Portland, OR',
      startTime: '2016-09-16T20:15:00-04:00',
      endTime: '2016-09-16T21:45:00-04:00'
    };

    return (
      <li>
        <h2>{eventInfo.eventName}</h2>
        <p>{eventInfo.startDate}</p>
        { eventInfo.endDate ? <p>{eventInfo.endDate}</p> : <p>{eventInfo.startTime}</p> }

        { eventInfo.eventType === 'film_series' ? <i className="fa fa-film" aria-hidden="true"></i> : null }
        { eventInfo.eventType === 'music_series' ? <i className="fa fa-music" aria-hidden="true"></i> : null }
        { eventInfo.eventType === 'event' ? <i className="fa fa-desktop" aria-hidden="true"></i> : null }
        { eventInfo.eventType === 'festival' ? <i className="fa fa-users" aria-hidden="true"></i> : null }

        { eventInfo.priority ? <p>high priority</p> : <p>low priority</p>}
        <p>{eventInfo.description}</p>
        <img src={eventInfo.image_url} alt={eventInfo.name}/>
        <a href={eventInfo.url}>More Info</a>
        <AddToCalendar event={calendarEvent}/>
      </li>
    );
  }
}

export default EventItem;
