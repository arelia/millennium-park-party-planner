import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all"
    };
    this.setFilter= this.setFilter.bind(this);
  }

  setFilter(e) {
    this.setState({filter: e.target.value});
  }

  render() {
    return (
      <nav className="nav">
        Filter: {this.state.filter}
        <form>
          <label><input type="radio" name="filter" value="all" onChange={this.setFilter} checked={this.state.filter === "all"}/>All</label>
          <label><input type="radio" name="filter" value="interactive" onChange={this.setFilter} checked={this.state.filter === "interactive"}/> Interactive</label>
          <label><input type="radio" name="filter" value="film" onChange={this.setFilter} checked={this.state.filter === "film"}/> Film</label>
          <label><input type="radio" name="filter" value="music" onChange={this.setFilter} checked={this.state.filter === "music"}/> Music</label>
          <label><input type="radio" name="filter" value="gaming" onChange={this.setFilter} checked={this.state.filter === "gaming"}/> Gaming</label>
        </form>
      </nav>
    );
  }
}

export default Nav;
