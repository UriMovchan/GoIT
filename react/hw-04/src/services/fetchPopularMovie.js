import themoviedbApi from "./themoviedbApi";

const fetchPopularMovie = async (params) => {
  return await themoviedbApi(params);
};

export default fetchPopularMovie;
