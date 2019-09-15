import API from './api';

const apiKey = '98c8873281875a49f3609ea43f182fd2';
const sortBy =
  '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2019-09-15';
const apiBaseUrl =
  'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + sortBy;

export const extractMovies = async () => {
  try {
    const response = await API.get(apiBaseUrl);

    if (!response) throw Error(`Request rejected`);
    const movies = response.data || {};
    console.log(movies);
    return Promise.resolve(movies);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
