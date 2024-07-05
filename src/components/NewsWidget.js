import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NewsWidget.scss';

const NewsWidget = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const API_KEY = '5d8e89ba7d4e433cb4ecaa809207a806';
  const COUNTRY = 'us'; // Chosen country for news

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`)
      .then(response => {
        setNews(response.data.articles.slice(0, 5));
      })
      .catch(error => {
        setError('Unable to fetch news data');
      });
  }, []);

  if (error) {
    return <div className="news-widget">{error}</div>;
  }

  if (news.length === 0) {
    return <div className="news-widget">Loading...</div>;
  }

  return (
    <div className="news-widget">
      <h2>Top News Headlines</h2>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              <h3>{article.title}</h3>
              <p>{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsWidget;
