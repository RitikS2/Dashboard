import React, { useState } from 'react';
import WeatherWidget from './components/WeatherWidget';
import NewsWidget from './components/NewsWidget';
import './App.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <button className="toggle-button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <div className="widgets-container">
        <WeatherWidget />
        <NewsWidget />
      </div>
    </div>
  );
};

export default App;
