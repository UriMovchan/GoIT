import themoviedbApi from "./themoviedbApi";

const fetchMovieDetails = async (params) => {
  return await themoviedbApi(params);
};

export default fetchMovieDetails;
