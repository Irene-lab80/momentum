import React, { useEffect, useState } from 'react';
import './App.scss';
import Clock from './Clock';
import CurrentDate from './CurrentDate';
import Greeting from './Greeting';

const App = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    }
  }, [])

  return (
    <div className="App">
      <h1>Momentum</h1>
      <main className='main'>
        <Clock date={date} />
        <CurrentDate date={date} />
        <Greeting date={date} />
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
