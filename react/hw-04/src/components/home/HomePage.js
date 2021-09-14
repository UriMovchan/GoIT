import { Component } from "react";
import { Link } from "react-router-dom";

import Container from "components/styled/Container";

import fetchPopularMovie from "services/fetchPopularMovie";

class HomePage extends Component {
  state = { movies: "" };

  getPopularMovie = async () => {
    return await fetchPopularMovie({ path: "trending/movie/day" });
  };

  async componentDidMount() {
    const movies = await this.getPopularMovie();
    this.setState({ movies: movies.results });
  }

  render() {
    return (
      <Container>
        <h1>Trending today</h1>
        <ul>
          {this.state.movies &&
            this.state.movies.map((i) => (
              <li key={i.id}>
                <Link
                  to={{
                    pathname: `/movies/${i.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {i.title}
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    );
  }
}

export default HomePage;
