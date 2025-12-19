const axios = require('axios');

const OMDB_URL = 'https://www.omdbapi.com/';
const API_KEY = process.env.OMDB_API_KEY;

async function searchMoviesByTitle(title) {
  const response = await axios.get(OMDB_URL, {
    params: {
      apikey: API_KEY,
      s: title
    }
  });

  return response.data;
}

module.exports = {
  searchMoviesByTitle
};
