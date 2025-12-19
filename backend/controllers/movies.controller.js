const omdbService = require('../services/omdb.service');

async function searchMovies(req, res) {
  try {
    const { search } = req.query;

    if (!search) {
      return res.status(400).json({ error: 'Parâmetro search é obrigatório' });
    }

    const movies = await omdbService.searchMoviesByTitle(search);

    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar filmes' });
  }
}

module.exports = {
  searchMovies,
};
