import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherWidget.scss';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = '78aa1cf9f137c57ce229cf059cf898b9';
  const LOCATION = 'Delhi,IN'; 

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${LOCATION}&appid=${API_KEY}&units=metric`)
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        setError('Unable to fetch weather data');
      });
  }, []);

  if (error) {
    return <div className="weather-widget">{error}</div>;
  }

  if (!weather) {
    return <div className="weather-widget">Loading...</div>;
  }

  return (
    <div className="weather-widget">
      <h2>Weather in {weather.name}</h2>
      <p>Temperature: {weather.main.temp} °C</p>
      <p>Condition: {weather.weather[0].description}</p>
      <img src={`https://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon" />
    </div>
  );
};

export default WeatherWidget;
