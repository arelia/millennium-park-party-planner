import React, { Component } from 'react';

class FilterCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all"
    };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(e) {
    this.setState({category: e.target.value});
  }

  render() {
    return (
      <form>
        <h3>{this.state.category}</h3>
        <label><input type="radio" name="category" value="all" onChange={this.setCategory} checked={this.state.category === "all"}/>All</label>
        <label><input type="radio" name="category" value="interactive" onChange={this.setCategory} checked={this.state.category === "interactive"}/> Interactive</label>
        <label><input type="radio" name="category" value="film" onChange={this.setCategory} checked={this.state.category === "film"}/> Film</label>
        <label><input type="radio" name="category" value="music" onChange={this.setCategory} checked={this.state.category === "music"}/> Music</label>
        <label><input type="radio" name="category" value="gaming" onChange={this.setCategory} checked={this.state.category === "gaming"}/> Gaming</label>
      </form>
    );
  }
}

export default FilterCategory;
