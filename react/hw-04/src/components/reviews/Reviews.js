import { Component } from "react";

import fetchReviews from "services/fetchReviews";

class Reviews extends Component {
  state = { reviews: null };

  getReviews = async () =>
    await fetchReviews({ path: `movie/${this.props.movieId}/reviews` });

  async componentDidMount() {
    const result = await this.getReviews();

    this.setState({ reviews: result.results });
  }

  render() {
    return (
      <ul>
        {(this.state.reviews &&
          this.state.reviews.length > 0 &&
          this.state.reviews.map((i) => (
            <li key={i.id}>
              <h3>
                {i.author} <span>{new Date(i.created_at).toDateString()}</span>
              </h3>
              <p>{i.content}</p>
            </li>
          ))) || <li>We don`t have any reviews for this movie</li>}
      </ul>
    );
  }
}

export default Reviews;
