import React, { Component } from "react";
import { MdSearch } from "react-icons/md";

export default class Searchbar extends Component {
  state = {
    value: "",
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state.value);
    this.setState({ value: "" });
  };

  handleChange = (evt) => {
    this.setState({ value: evt.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <MdSearch color="#394f6a" size={30} />
            <span className="SearchForm-button-label"></span>
          </button>

          <input
            className="SearchForm-input"
            onChange={this.handleChange}
            type="text"
            placeholder="Search images and photos"
            value={value}
          />
        </form>
      </header>
    );
  }
}
