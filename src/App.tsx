import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { News } from './utils/models';
import './App.css';

function App() {
const [news, setNews] = useState<News[]>([]);

useEffect(()=> {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  axios.get(apiUrl)
  .then((response)=> {
    setNews(response.data.articles)
  })
  .catch((error) => {
    console.error('Error fetching news data:', error);
  });

}, []);


  return (
    <div className="app">
      <header className="app-header">
        <h1>News Reader App</h1>
      </header>
    </div>
  );
}

export default App;
