import React, { Component } from 'react';

class Events extends Component {
  render() {
    const eventsList = this.props.eventsList;

    const eventItems = Object
      .keys(eventsList)
      .map(key =>
        <li key={key}>
          <h2>{eventsList[key].name}</h2>
          <p>{eventsList[key].date}</p>
          <p>{eventsList[key].location}</p>
          <p>{eventsList[key].description}</p>
          <img src={eventsList[key].image_url} alt={eventsList[key].name}/>
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
