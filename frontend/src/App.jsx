import Home from './pages/Home';

function App() {
  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <h1 style={styles.title}>Catálogo de Filmes</h1>
        <p style={styles.subtitle}>
          Busque, descubra e explore seus filmes favoritos
        </p>
      </header>
      <Home />
    </div>
  );
}

const styles = {
  app: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom, #1e3a8a, #6366f1)', 
    color: '#fff',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '0 20px 40px 20px',
  },
  header: {
    textAlign: 'center',
    padding: '60px 20px 40px 20px',
    background: 'rgba(0,0,0,0.2)',
    borderRadius: '12px',
    marginBottom: '30px',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
    margin: 0,
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  subtitle: {
    fontSize: '20px',
    marginTop: '10px',
    color: '#e0e7ff',
  },
};

export default App;
