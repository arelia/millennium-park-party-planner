import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="Sidebar">
        <h3>Sidebar: Stats</h3>
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
