import React, { useEffect, useState } from 'react';
import './App.scss';
import Clock from './Clock';
import CurrentDate from './CurrentDate';
import Greeting from './Greeting';
import Slider from './Slider';

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

  const images = [
    'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
    'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
    'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
    'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
  ]

  return (
    <div className="App">
      <main className='main'>
        <Clock date={date} />
        <CurrentDate date={date} />
        <Greeting date={date} />
      </main>
      <Slider slides={images} />
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
