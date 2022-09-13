import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/global';
import WeatherPage from './components/Pages/WeatherPage';
import NotFoundPage from './components/Pages/NotFoundPage';
import MainPageContainer from './components/Containers/MainPageContainer';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<MainPageContainer />} />
      <Route path="weather" element={<WeatherPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
