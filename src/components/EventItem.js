import React, { Component } from 'react';
import AddToCalendar from 'react-add-to-calendar';
import Moment from 'react-moment';

class EventItem extends Component {
  constructor(props){
    super(props);
    this.toggleRSVP = this.toggleRSVP.bind(this);
    this.state = {
      rsvp: false
    };
  }

  toggleRSVP(e) {
    this.setState(({ rsvp }) => ( { rsvp: !rsvp } ));
  }

  render() {
    const eventInfo = this.props.eventInfo;

    const imageStyles = {
      backgroundImage: 'url(' + eventInfo.image_url + ')',
    };

    let startDate = eventInfo.startDate;

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
      <li className={'event-item ' + (eventInfo.priority ? 'priority' : '')}>
        <div className="event-item__image" style={imageStyles}></div>
        <div className="event-item__text">
          <h2>
            { eventInfo.eventType === 'film_series' ? <i className="event-type-icon fa fa-film" aria-hidden="true"></i> : null }
            { eventInfo.eventType === 'music_series' ? <i className="event-type-icon fa fa-music" aria-hidden="true"></i> : null }
            { eventInfo.eventType === 'event' ? <i className="event-type-icon fa fa-desktop" aria-hidden="true"></i> : null }
            { eventInfo.eventType === 'festival' ? <i className="event-type-icon fa fa-users" aria-hidden="true"></i> : null }

            {eventInfo.eventName}
          </h2>
          <p className="event-item__date"><Moment format="dddd MMM D">{startDate}</Moment></p>
          { eventInfo.endDate ? <p>Through {eventInfo.endDate}</p> : <p>Start Time: {eventInfo.startTime}</p> }

          { eventInfo.priority ? <p>high priority</p> : <p>low priority</p>}
          <p>{eventInfo.description}</p>

          <a href={eventInfo.url} className="event-item__url" target="_blank">More Info</a>
          <AddToCalendar event={calendarEvent} buttonTemplate={icon} displayItemIcons={false} listItems={items} />
          <label htmlFor="rsvp"> RSVP
            <input type="checkbox" name="rsvp" checked={this.state.rsvp} onChange={this.toggleRSVP} ref={(input) => this.rsvp = input} />
          </label>
        </div>
      </li>
    );
  }
}

export default EventItem;
