import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {display: true};
  }
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Sidebar">
      <p>{this.state.display}</p>
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
