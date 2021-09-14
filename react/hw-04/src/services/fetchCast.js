import themoviedbApi from "./themoviedbApi";

const fetchCast = async (params) => {
  return await themoviedbApi(params);
};

export default fetchCast;
