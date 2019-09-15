import API from './api';

// const corsUrl = 'https://cors-anywhere.herokuapp.com/';
const apiKey = '98c8873281875a49f3609ea43f182fd2';
const apiBaseUrl =
  'https://api.themoviedb.org/3/authentication/token/new?api_key=' + apiKey;

export const loginUser = async ({ id, password }) => {
  try {
    const response = await API.get(apiBaseUrl);

    if (!response) throw Error(`Request rejected`);
    const tokenData = response.data || {};
    console.log(tokenData);

    // sessionStorage.setItem(USER_DATA, JSON.stringify(user));

    return Promise.resolve(tokenData);
  } catch (error) {
    return Promise.reject(error.response);
  }
};
