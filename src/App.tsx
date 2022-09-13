import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/global';
import NotFoundPage from './components/Pages/NotFoundPage';
import MainPageContainer from './components/Containers/MainPageContainer';
import WeatherPageContainer from './components/Pages/WeatherPage';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<MainPageContainer />} />
      <Route path="weather" element={<WeatherPageContainer />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
