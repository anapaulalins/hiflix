import api_key from '../config/api_key';

const api_url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key.API_KEY}&sort_by=popularity.desc&page=2`;

export const getMovies = async () => {
  const {results} = await fetch(api_url).then(data => data.json());

  return results;
};

export const getMovie = async (id: string) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key.API_KEY}`,
  ).then(data => data.json());

  return res;
};

export const searchMovie = async (e: string) => {
  const {results} = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key.API_KEY}&query=${e}`,
  ).then(data => data.json());

  return results;
};
