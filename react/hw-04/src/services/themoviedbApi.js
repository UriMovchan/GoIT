import ajax from "./ajax";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "?api_key=3af2aab6a443ac233029796357b58a94";

const themoviedbApi = async (request) => {
  const { path, params } = request,
    query = [];

  if (params) {
    for (const key in params) {
      query.push(`&${key}=${params[key]}`);
    }
  }

  return await ajax({
    url: `${BASE_URL}${path}${API_KEY}${query.join()}`,
  });
};

export default themoviedbApi;
