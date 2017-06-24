import React, { Component } from 'react';

class Events extends Component {
  render() {
    const eventsList = this.props.eventsList;

    const eventItems = Object
      .keys(eventsList)
      .map(key =>
        <li key={key}>
          <h2>{eventsList[key].eventName}</h2>
          <p>{eventsList[key].startDate}</p>
          { eventsList[key].endDate ? <p>{eventsList[key].endDate}</p> : <p>{eventsList[key].startTime}</p> }

          { eventsList[key].eventType === 'film_series' ? <i className="fa fa-film" aria-hidden="true"></i> : null }
          { eventsList[key].eventType === 'music_series' ? <i className="fa fa-music" aria-hidden="true"></i> : null }
          { eventsList[key].eventType === 'event' ? <i className="fa fa-desktop" aria-hidden="true"></i> : null }
          { eventsList[key].eventType === 'festival' ? <i className="fa fa-users" aria-hidden="true"></i> : null }
          
          { eventsList[key].priority ? <p>high priority</p> : <p>low priority</p>}
          <p>{eventsList[key].description}</p>
          <img src={eventsList[key].image_url} alt={eventsList[key].name}/>
          <a href={eventsList[key].url}>More Info</a>
        </li>
      )

    return (
      <ul className="Events">
        {eventItems}
      </ul>
    );
  }
}

export default Events;
