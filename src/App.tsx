import React from 'react';
import './App.scss';
import Clock from './Clock';
import Date from './Date';
import Greeting from './Greeting';

const App = () => {
  return (
    <div className="App">
      <h1>Momentum</h1>
      <main className='main'>
        <Clock />
        <Date />
        <Greeting />
      </main>
    </div>
  );
}

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
