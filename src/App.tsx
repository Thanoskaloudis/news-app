import React, { useEffect, useState } from 'react';
import { INews } from './utils/models';
import { NewsList } from './components/NewsList/NewsList';
import './App.css';
import axios from 'axios';

function App() {
const [news, setNews] = useState<INews[]>([]);

useEffect(()=> {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  axios.get(apiUrl)
  .then((response)=> {
    setNews(response.data.articles);
    console.log(response.data.articles);
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
      <main>
      <NewsList news={news} />
      </main>
    </div>
  );
}

export default App;
