import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieCard from '../components/MovieCard';
import { searchMovies } from '../services/api';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  async function handleSearch(search) {
    if (!search.trim()) return;

    setLoading(true);
    setMovies([]);
    setNotFound(false);

    try {
      const response = await searchMovies(search);

      const moviesList = response.Search || [];

      if (moviesList.length === 0) {
        setNotFound(true);
      } else {
        setMovies(moviesList);
      }
    } catch (error) {
      console.error('Erro ao buscar filmes', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <SearchBar onSearch={handleSearch} />

      {loading && <p style={styles.loading}>Carregando...</p>}

      {notFound && !loading && (
        <div style={styles.hint}>
          <p>🎬 Não achou o seu filme favorito?</p>
          <p>
            Alguns filmes são encontrados apenas pelo <strong>título original</strong>.
          </p>
          <p>
            Exemplo: <em>Velozes e Furiosos</em> → <strong>Fast and Furious</strong>
          </p>
        </div>
      )}

      <div style={styles.grid}>
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    marginTop: '20px',
  },
  hint: {
    marginTop: '40px',
    padding: '20px',
    borderRadius: '12px',
    background: 'linear-gradient(90deg, #ff9a9e, #fad0c4)',
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px',
  },
};

export default Home;


