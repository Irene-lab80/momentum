import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/global';
import MainPageContainer from './components/Containers/MainPageContainer';
import WeatherPageContainer from './components/Pages/WeatherPage';
import NotFoundPageContainer from './components/Containers/NotFoundPageContainer';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<MainPageContainer />} />
      <Route path="weather" element={<WeatherPageContainer />} />
      <Route path="*" element={<NotFoundPageContainer />} />
    </Routes>
  </div>
);

export default App;
