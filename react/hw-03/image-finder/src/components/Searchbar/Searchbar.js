import { Component } from "react";

class Searchbar extends Component {
  state = {
    value: "",
  };

  inputHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitHandler}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.inputHandler}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
