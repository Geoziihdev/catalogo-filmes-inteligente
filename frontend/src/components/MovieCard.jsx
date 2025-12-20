function MovieCard({ movie }) {

  const poster = movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png';

  if (!poster) return null;

  return (
    <div style={styles.card}>
      <img src={poster} alt={movie.Title} style={styles.image} />
      <h3 style={styles.title}>{movie.Title}</h3>
      <p style={styles.year}>{movie.Year}</p>
    </div>
  );
}


const styles = {
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    padding: '10px',
    textAlign: 'center',
    color: '#fff',
    boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '10px',
  },
  info: {
    textAlign: 'center',
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    margin: '5px 0',
  },
  year: {
    fontSize: '14px',
    color: '#d1d5db',
  },
};

export default MovieCard;
