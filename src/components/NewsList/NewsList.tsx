import React from 'react';
import { INewsList } from '../../utils/models';
import { NewsItem } from '../NewsItem/NewsItem';
import './NewsList.css';

export const NewsList = (props: INewsList) => {
  return (
    <div className="news-list">
    {props.news.map((newsItem, index) => (
      <NewsItem key={index} news={newsItem} />
    ))}
  </div>
  )
}
