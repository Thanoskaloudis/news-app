import React from 'react';
import { INewsItem } from '../../utils/models';
import './NewsItem.css';

export const NewsItem = (props: INewsItem) => {
  return (
    <div className="news-card">
    <img src={props.news.urlToImage} alt={props.news.title} />
    <h2>{props.news.title}</h2>
    <p>{props.news.description}</p>
  </div>
  )
}
