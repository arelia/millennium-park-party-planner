import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div className="Sidebar">
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <h3>Stats</h3>
        <ul>
          <li>Steps taken</li>
          <li>Hotel departure time</li>
          <li>Hotel arrival time</li>
          <li>Spent on food</li>
          <li>Spent on transportation</li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;
