import { Component } from "react";
import { Link, Route } from "react-router-dom";

import Cast from "components/cast/Cast";
import Reviews from "components/reviews/Reviews";

import fetchMovieDetails from "services/fetchMovieDetails";

import noImage from "img/no-image.jpeg";

class MovieDetailsPage extends Component {
  state = {
    title: null,
    backdrop_path: null,
    release_date: null,
    vote_average: null,
    overview: null,
    genres: null,
  };

  getMovieDetails = async () => {
    const { movieId } = this.props.match.params;
    return await fetchMovieDetails({
      path: `movie/${movieId}`,
    });
  };

  async componentDidMount() {
    const movieDetails = await this.getMovieDetails();

    this.setState({ ...movieDetails });
  }

  goBackHandler = () => {
    const { state } = this.props.location;

    if (state) {
      this.props.history.push({ pathname: state.from.pathname, state: state });
    } else {
      this.props.history.goBack();
    }
  };

  render() {
    const release_year = new Date(this.state.release_date).getFullYear();

    return (
      <>
        <button className="backBtn" onClick={this.goBackHandler}>
          Back
        </button>
        <div className="movie">
          <img
            src={
              this.state.backdrop_path
                ? `https://image.tmdb.org/t/p/w500${this.state.backdrop_path}`
                : noImage
            }
            alt={this.state.title}
            className="movie__img"
          />

          <div className="movie__detail">
            <h1>
              {this.state.title} ({release_year})
            </h1>
            <p>User Score: {this.state.vote_average}</p>
            <h2>Overview</h2>
            <p>{this.state.overview}</p>
            <h2>Genres</h2>
            <p>
              {this.state.genres &&
                this.state.genres.map((i) => (
                  <span className="movie__genre" key={i.id}>
                    {i.name}
                  </span>
                ))}
            </p>
          </div>
        </div>
        <div className="movie__additional">
          <ul>
            <li className="additional_item">
              <Link
                to={{
                  pathname: `${this.props.match.url}/cast`,
                  state: { ...this.props.location.state },
                }}
              >
                Cast
              </Link>
            </li>
            <li className="additional_item">
              <Link
                to={{
                  pathname: `${this.props.match.url}/reviews`,
                  state: { ...this.props.location.state },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Route
          path={`${this.props.match.url}/cast`}
          render={() => <Cast movieId={this.props.match.params.movieId} />}
        />
        <Route
          path={`${this.props.match.url}/reviews`}
          render={() => <Reviews movieId={this.props.match.params.movieId} />}
        />
      </>
    );
  }
}

export default MovieDetailsPage;
