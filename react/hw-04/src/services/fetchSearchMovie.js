import themoviedbApi from "./themoviedbApi";

const fetchSearchMovie = async (params) => {
  return await themoviedbApi(params);
};

export default fetchSearchMovie;
