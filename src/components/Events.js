import React, { Component } from 'react';

class Events extends Component {
  constructor(props){
    super(props);
    this.state = {
      events: [
        {
          id: 263717,
          name: "Women in Tech Party",
          date: "3/8/17",
          location: "Indeed",
          description: "A party for women",
          image: "http://www.google.com/image.jpg"
        },
        {
          id: 263718,
          name: "Men in Tech Party",
          date: "3/12/17",
          location: "PBS",
          description: "A party for men",
          image: "http://www.google.com/image.jpg"
        }
      ]
    }
  }
  render() {
    const events = this.state.events;
    const listEvents = events.map(
      (event) =>
      <li key={event.id}>
        <h2>{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
        <img src={event.image} alt={`image of ${event.name}`}/>
      </li>
    );

    return (
      <ul className="Events">
        {listEvents}
      </ul>
    );
  }
}

export default Events;
