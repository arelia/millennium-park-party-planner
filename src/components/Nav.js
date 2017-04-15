import React, { Component } from 'react';
import FilterCategory from '../components/FilterCategory.js';
import FilterDate from '../components/FilterDate.js';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="nav">
        <FilterCategory />
        <FilterDate />
      </nav>
    );
  }
}

export default Nav;
