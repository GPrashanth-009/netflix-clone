import React from 'react';
import './App.css';

function App() {
  const movies = [
    'Stranger Things',
    'Money Heist',
    'Wednesday',
    'Dark',
    'Squid Game'
  ];

  return (
    <div className="app">
      <h1>Netflix Clone</h1>

      <div className="movie-container">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <h2>{movie}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;