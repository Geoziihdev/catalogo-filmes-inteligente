import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001/movies',
});

export async function searchMovies(search) {
  const response = await api.get('', { params: { search } });
  return response.data; 
}
