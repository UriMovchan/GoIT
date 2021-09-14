import { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";

import Loader from "components/Loader/Loader";

const HomePage = lazy(() => import("components/home/HomePage"));
const MoviesPage = lazy(() => import("components/moviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("components/movieDetailsPage/MovieDetailsPage")
);

class App extends Component {
  render() {
    return (
      <>
        <header>
          <NavLink exact to="/" className="navLink" activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/movies" className="navLink" activeClassName="active">
            Movies
          </NavLink>
        </header>

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path="/movies/:movieId" component={MovieDetailsPage} />
            <Route path="/movies" component={MoviesPage} />
            <Route path="/" exact component={HomePage} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
