import React from 'react';
import { NewsList } from './components/NewsList/NewsList';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>News Reader App</h1>
      </header>
      <main>
      <NewsList />
      </main>
    </div>
  );
}

export default App;
