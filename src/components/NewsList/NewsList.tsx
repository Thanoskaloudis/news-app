import React, { Fragment, useEffect, useState } from 'react';
import { fetchNewsData } from '../../services/newsService';
import { INews } from '../../utils/models';
import { NewsItem } from '../NewsItem/NewsItem';
import './NewsList.css';

const itemsPerPage = 9;

export const NewsList = () => {
  const [news, setNews] = useState<INews[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchNewsData();
        setNews(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching news data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = currentPage * itemsPerPage;

  const newsOnCurrentPage = news.slice(
    startIndex,
    endIndex
  );

  const handleNextPage = () => {
    if (endIndex < news.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Fragment>
      <div className="news-list">
        {newsOnCurrentPage.map((newsItem, index) => (
          <NewsItem key={index} news={newsItem} />
        ))}
      </div>
      <div className="pagination">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <button
          onClick={handleNextPage}
          disabled={endIndex >= news.length}
        >
          Next Page
        </button>
      </div>
    </Fragment>
  );
};
