import themoviedbApi from "./themoviedbApi";

const fetchReviews = async (params) => {
  return await themoviedbApi(params);
};

export default fetchReviews;
