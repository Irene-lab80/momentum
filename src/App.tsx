import React, { useEffect, useState } from 'react';
import Clock from './components/common/Clock';
import CurrentDate from './components/common/CurrentDate';
import Greeting from './components/common/Greeting';
import ImageSlider from './components/common/Slider/ImageSlider';
import GlobalStyles from './styles/global';

const App = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const images = [
    { url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80', title: 'slide1' },
    { url: 'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80', title: 'slide2' },
    { url: 'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80', title: 'slide3' },
    { url: 'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80', title: 'slide4' }
  ];

  const containerStyles = {
    width: '100vw',
    height: '100vh',
  };

  return (
    <div className="App">
      <GlobalStyles />
      <main className="main">
        <Clock date={date} />
        <CurrentDate date={date} />
        <Greeting date={date} />
      </main>
      <div style={containerStyles}>
        <ImageSlider slides={images} />
      </div>
    </div>
  );
};

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
