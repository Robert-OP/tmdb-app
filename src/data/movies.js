import API from './api';
import { db } from './firebase';

const apiKey = '98c8873281875a49f3609ea43f182fd2';
const sortBy =
  '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=15&primary_release_date.gte=2019-09-16';

export const extractMovies = async () => {
  try {
    const apiBaseUrl =
      'https://api.themoviedb.org/3/discover/movie?api_key=' + apiKey + sortBy;
    const response = await API.get(apiBaseUrl);

    if (!response) throw Error(`Request rejected`);
    console.log(response.data);
    const movies = response.data.results || {};
    console.log(movies);
    await movies.forEach(async movie => {
      const { id, title, release_date: release } = movie;
      console.log(movie);
      await db.collection('movies').add({
        id,
        release,
        title
      });
    });

    return Promise.resolve(movies);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

export const fetchMovies = async () => {
  try {
    const collection = await db.collection('movies').get();
    const movies = collection.docs.map(doc => doc.data());

    return Promise.resolve(movies);
  } catch (error) {
    return Promise.reject(error.response);
  }
};

export const fetchMovie = async ({ id }) => {
  try {
    const apiBaseUrl =
      `https://api.themoviedb.org/3/movie/${id}?api_key=` + apiKey;
    const response = await API.get(apiBaseUrl);
    if (!response) throw Error(`Request rejected`);
    const movie = response.data || {};

    const {
      original_title,
      overview,
      popularity,
      vote_average,
      vote_count,
      status,
      poster_path,
      genres,
      original_language
    } = movie;

    const movieDetails = {
      title: original_title,
      overview,
      popularity,
      voteAverage: vote_average,
      voteCount: vote_count,
      status,
      poster: poster_path,
      genres: genres.map(genre => genre.name + ' '),
      language: original_language
    };

    console.log(movieDetails);
    return Promise.resolve(movieDetails);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
