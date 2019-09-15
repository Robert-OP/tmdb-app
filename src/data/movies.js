import API from './api';
import { db } from './firebase';

const apiKey = '98c8873281875a49f3609ea43f182fd2';
const sortBy =
  '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=15&primary_release_date.gte=2019-09-16';
const apiBaseUrl =
  'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + sortBy;

export const extractMovies = async () => {
  try {
    const response = await API.get(apiBaseUrl);

    if (!response) throw Error(`Request rejected`);
    console.log(response.data);
    const movies = response.data.results || {};
    console.log(movies);
    await movies.forEach(async movie => {
      const { id, title, genre_ids: genres, release_date: release } = movie;
      console.log(movie);
      await db.collection('movies').add({
        id,
        genres,
        release,
        title
      });
    });

    return Promise.resolve(movies);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

export const fetchMovie = async ({ id }) => {
  try {
    console.log(id);
    const response = await API.get(apiBaseUrl);
    if (!response) throw Error(`Request rejected`);
    const movie = response.data || {};
    console.log(movie);
    return Promise.resolve(movie);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
