import React, { Component } from 'react';

class EventsForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("handling it");
    const newEvent = {
      name: this.name.value,
      date: this.date.value,
      location: this.location.value,
      description: this.description.value,
      image_url: this.image_url.value
    }
    this.setState({addEvent: newEvent});
    this.eventForm.reset();
    // create ID
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={(input) => this.eventForm = input} >
        <label htmlFor="name">Name
          <input type="text" name="name" ref={(input) => this.name = input} />
        </label>
        <label htmlFor="date">Date
          <input type="date" name="date" min="2017-03-08" max="2017-03-19" ref={(input) => this.date = input} />
        </label>
        <label htmlFor="location">Location
          <input type="text" name="location" ref={(input) => this.location = input} />
        </label>
        <label htmlFor="description">Description
          <textarea name="description" ref={(input) => this.description = input} />
        </label>
        <label htmlFor="image_url">Image URL
          <input type="text" name="image_url" ref={(input) => this.image_url = input} />
        </label>
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  }
}

export default EventsForm;
