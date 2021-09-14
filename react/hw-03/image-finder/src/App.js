import { Component } from "react";
import Container from "components/styled/Container";
import Loader from "components/Loader/Loader";
import Searchbar from "components/Searchbar/Searchbar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";

class App extends Component {
  BASE_URL = "https://pixabay.com/api/";
  API_KEY = "21234453-285b94d8962b2b6d6c9bd2490";

  state = {
    hits: "",
    page: 1,
    per_page: 12,
    q: "",
    loading: false,
    modalOpen: false,
    modalImg: { src: "", alt: "" },
  };

  async ajax() {
    this.setState({ loading: true });

    const url = `${this.BASE_URL}?key=${this.API_KEY}&page=${
      this.state.page
    }&per_page=${this.state.per_page}${
      this.state.q ? `&q=${this.state.q}` : ""
    }`;

    const result = await fetch(url);
    return result.ok ? await result.json() : console.log("error", result);
  }

  componentDidMount() {
    this.ajax().then((i) => {
      this.setState((pS) => ({ hits: i.hits, loading: false }));
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.q !== this.state.q) {
      await this.ajax().then((i) => {
        this.setState({ hits: i.hits, loading: false });
      });
    } else if (prevState.page !== this.state.page) {
      await this.ajax().then((i) => {
        this.setState((pS) => ({
          hits: [...pS.hits, ...i.hits],
          loading: false,
        }));

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      });
    }
  }

  searchbarHandler = (search) => {
    if (this.state.q.toLocaleLowerCase() !== search.toLocaleLowerCase())
      this.setState({ q: search, page: 1, loading: false });
  };

  loadMoreHandler = () => {
    this.setState((pS) => ({
      page: pS.page + 1,
    }));
  };

  modalOpenHandler = (e) => {
    this.setState({
      modalOpen: true,
      modalImg: { src: e.target.dataset.modalSrc, alt: e.target.alt },
    });

    document.addEventListener("keydown", this.modalCloseHandler);
  };

  modalCloseHandler = (e) => {
    if (
      e.keyCode === 27 ||
      e.code === "Escape" ||
      e.key === "Escape" ||
      e.target.classList.contains("Overlay")
    ) {
      this.setState({
        modalOpen: false,
      });

      document.removeEventListener("keydown", this.modalCloseHandler);
    }
  };

  render() {
    return (
      <Container>
        {this.state.loading && <Loader />}
        <Searchbar onSubmit={this.searchbarHandler} />
        <ImageGallery
          hits={this.state.hits}
          modalOpen={this.modalOpenHandler}
        />
        {this.state.hits.length > 0 && (
          <Button onClick={this.loadMoreHandler}>Load more</Button>
        )}

        {this.state.modalOpen && (
          <Modal img={this.state.modalImg} close={this.modalCloseHandler} />
        )}
      </Container>
    );
  }
}

export default App;
