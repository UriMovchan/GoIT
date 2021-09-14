import { Component } from "react";
import { Link } from "react-router-dom";

import Container from "components/styled/Container";

import fetchSearchMovie from "services/fetchSearchMovie";

class MoviesPage extends Component {
  state = {
    movies: "",
    query: "",
  };

  getSearchMovie = async () => {
    return await fetchSearchMovie({
      path: "search/movie",
      params: { query: this.state.query },
    });
  };

  inputHandler = (e) => {
    if (e.target.value === "") {
      this.setState({ alert: false });
    }

    this.setState({ query: e.target.value });
  };

  submitHandler = async (e) => {
    e.preventDefault();

    if (this.state.query === "") {
      alert("Please type what a you looking for");
      return;
    }

    const movies = await this.getSearchMovie();

    this.setState({ movies: movies.results });
  };

  async componentDidMount() {
    if (this.props.location.state && this.props.location.state.query) {
      await this.setState({ query: this.props.location.state.query });

      const movies = await this.getSearchMovie();

      this.setState({ movies: movies.results });

      document.querySelector(".search__field").value = this.state.query;
    }
  }
  render() {
    return (
      <Container>
        <form className="search" onSubmit={this.submitHandler}>
          <input className="search__field" onInput={this.inputHandler} />
          <button className="search__btn">Search</button>
        </form>

        <ul>
          {this.state.movies &&
            ((this.state.movies.length > 0 &&
              this.state.movies.map((i) => (
                <li key={i.id}>
                  <Link
                    to={{
                      pathname: `${this.props.match.url}/${i.id}`,
                      state: {
                        from: this.props.location,
                        query: this.state.query,
                      },
                    }}
                  >
                    {i.title}
                  </Link>
                </li>
              ))) || <li>Nothing found</li>)}
        </ul>
      </Container>
    );
  }
}

export default MoviesPage;
