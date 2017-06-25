import React, { Component } from 'react';
import AddToCalendar from 'react-add-to-calendar';

class EventItem extends Component {
  render() {
    const eventInfo = this.props.eventInfo;

    let calendarEvent = {
      title: eventInfo.eventName,
      description: `
        Millennium Park ${eventInfo.eventType}
        How likely is Arelia to go: ${ eventInfo.priority ? "She's definately going" : "She might not go"}
        Additional Info:
        ${eventInfo.url}
        ${ eventInfo.description ? eventInfo.description : ''}
      `,
      location: 'Millennium Park',
      startTime: eventInfo.startDate,
      endTime: eventInfo.startDate // need to work out start/end date/time multiday/etc logic
    };

    let icon = { 'calendar-plus-o': 'left' };

    let items = [
      { google: 'Google' },
      { outlook: 'Outlook' },
      { outlookcom: 'Outlook.com' },
      { apple: 'Apple Calendar' },
      { yahoo: 'Yahoo' }
    ];

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
        <AddToCalendar event={calendarEvent} buttonTemplate={icon} displayItemIcons={false} listItems={items} />
      </li>
    );
  }
}

export default EventItem;
