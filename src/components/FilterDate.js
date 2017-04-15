import React, { Component } from 'react';

class FilterDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: ""
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(e) {
    this.setState({date: e.target.value});
  }

  render() {
    return (
      <form>
        <h3>{this.state.date}</h3>
        <label><input name="date" type="date" min="2017-03-08" max="2017-03-19" onChange={this.setDate}/></label>
      </form>
    );
  }
}

export default FilterDate;
