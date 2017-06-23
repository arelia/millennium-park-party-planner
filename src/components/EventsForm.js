import React, { Component } from 'react';

class EventsForm extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventTypeChange = this.handleEventTypeChange.bind(this);
    this.togglePriority= this.togglePriority.bind(this);
    this.state = {
      eventType: 'music_series',
      priority: false
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const newEvent = {
      startDate: this.startDate.value,
      endDate: this.endDate.value, // endDate = endDate || startDate and if endDate then multiday = true
      startTime: this.startTime.value,
      eventName: this.eventName.value,
      eventType: this.state.eventType,
      image_url: this.image_url.value,
      priority: this.state.priority,
      url: this.url.value,
      description: this.description.value
    }
    this.props.addEvent(newEvent);
    this.eventForm.reset();
  }

  handleEventTypeChange(e) {
    this.setState({eventType: e.target.value});
  }

  togglePriority(e) {
    this.setState(({ priority }) => ( { priority: !priority } ));
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} ref={(input) => this.eventForm = input} >
        <label htmlFor="startDate">Start Date
          <input type="date" name="startDate" ref={(input) => this.startDate = input} />
        </label>
        <label htmlFor="endDate">End Date
          <input type="date" name="endDate" ref={(input) => this.endDate = input} />
        </label>
        <label htmlFor="startTime">Start Time
          <input type="time" name="startTime" ref={(input) => this.startTime = input} />
        </label>
        <label htmlFor="eventName">Event Name
          <input type="text" name="eventName" ref={(input) => this.eventName = input} />
        </label>
        <label htmlFor="eventType">Event Type
          <select value={this.state.eventType} name="eventType" onChange={this.handleEventTypeChange}>
            <option value="music_series">Music Series</option>
            <option value="film_series">Film Series</option>
            <option value="festival">Festival</option>
            <option value="event">Event</option>
          </select>
        </label>
        <label htmlFor="image_url">Image URL
          <input type="text" name="image_url" ref={(input) => this.image_url = input} />
        </label>
        <label htmlFor="url"> URL
          <input type="text" name="url" ref={(input) => this.url = input} />
        </label>
        <label htmlFor="priority"> Priority
          <input type="checkbox" name="priority" checked={this.state.priority} onChange={this.togglePriority} ref={(input) => this.priority = input} />
        </label>
        <label htmlFor="description">Description
          <textarea name="description" ref={(input) => this.description = input} />
        </label>
        <input type="submit" name="submit" value="Submit" />
      </form>
    );
  }
}

export default EventsForm;
