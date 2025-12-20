import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!search.trim()) return;
    onSearch(search);
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Buscar filme..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Buscar
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '30px',
    flexWrap: 'wrap',
  },
  input: {
    width: '320px',
    padding: '12px',
    borderRadius: '8px',
    border: 'none',
    fontSize: '16px',
    outline: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
  },
  button: {
    padding: '12px 24px',
    borderRadius: '8px',
    border: 'none',
    background: 'linear-gradient(90deg, #4f46e5, #8b5cf6)',
    color: '#fff',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
    transition: 'transform 0.2s, box-shadow 0.2s',
  },
};

export default SearchBar;
