import React, { Component } from 'react';
import Nav from '../components/Nav.js';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>This is a header</h1>
        <Nav />
      </header>
    );
  }
}

export default Header;
