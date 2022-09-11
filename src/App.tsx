import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/global';
import MainPage from './components/Pages/MainPage';
import WeatherPage from './components/Pages/WeatherPage';
import NotFoundPage from './components/Pages/NotFoundPage';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="weather" element={<WeatherPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
