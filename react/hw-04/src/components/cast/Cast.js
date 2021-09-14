import { Component } from "react";
import fetchCast from "services/fetchCast";
import noImg from "img/no-img.jpeg";

class Cast extends Component {
  state = { cast: null };

  getCast = async () =>
    await fetchCast({ path: `movie/${this.props.movieId}/credits` });

  async componentDidMount() {
    const result = await this.getCast();
    this.setState({ cast: result.cast });
  }

  render() {
    return (
      <ul className="cast__list">
        {this.state.cast &&
          this.state.cast.map((i) => (
            <li className="cast__item" key={i.id}>
              <img
                src={
                  i.profile_path
                    ? `https://image.tmdb.org/t/p/w500${i.profile_path}`
                    : noImg
                }
                alt={i.name}
                className="cast__img"
              />
              {i.name}
              <p>
                <span>character: </span>
                <span>{i.character}</span>
              </p>
            </li>
          ))}
      </ul>
    );
  }
}

export default Cast;
