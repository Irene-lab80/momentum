import React from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './styles/global';
import MainPage from './components/Pages/MainPage';

const App = () => (
  <div className="App">
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<div>not found 404</div>} />
    </Routes>
  </div>
);

// TODO
// Часы и календарь
// Приветствие
// Смена фонового изображения
// Виджет погоды
// Виджет цитата дня
// Аудиоплеер
// Перевод
// Flickr/Unsplash API
// Настройки en/rus
// ToDo List
export default App;
