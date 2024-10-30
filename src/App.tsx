import React, { useState, useEffect } from 'react';
import { fetchRandomFact } from './api/fetchFact';
import { FactResponse } from './types';
import './App.css';

const App: React.FC = () => {
  const [fact, setFact] = useState<FactResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadFact = async () => {
    try {
      const data = await fetchRandomFact();
      setFact(data);
      setError(null);
    } catch (error) {
      setError("Chyba při načítání faktu. Zkus to znovu.");
    }
  };

  useEffect(() => {
    loadFact();
  }, []);

  return (
    <div className="App">
      <h2>Random Useless Facts</h2>
      {error && <p>{error}</p>}
      {fact ? (
        <div className="factSection">
          <p>{fact.text}</p>
          <button onClick={loadFact}>Next</button>
        </div>
      ) : (
        <p>Načítání...</p>
      )}
    </div>
  );
}

export default App;
