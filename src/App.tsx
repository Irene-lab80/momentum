import React, { useEffect, useState } from 'react';
import Clock from './components/common/Clock';
import CurrentDate from './components/common/CurrentDate';
import Greeting from './components/common/Greeting';
import ImageSlider from './components/common/Slider';
import GlobalStyles from './styles/global';
import QuoteGenerator from './components/common/QuoteGenerator';
import {
  Footer, Header, Main, MainScreen, SliderContainer
} from './styles';
import Weather from './components/common/Weather';
import Player from './components/common/Player';

const App = () => {
  // DATE
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

  // time of day
  const getTimeOfDay = (hrs: number): 'night' | 'morning' | 'afternoon' | 'evening' | undefined | 'error' => {
    if (hrs < 6) return 'night';
    if (hrs >= 6 && hrs < 12) return 'morning';
    if (hrs >= 12 && hrs < 17) return 'afternoon';
    if (hrs >= 17 && hrs <= 23) return 'evening';
    return 'error';
  };

  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay(date.getHours()));

  function refreshTimeOfDay() {
    setTimeOfDay(getTimeOfDay(date.getHours()));
  }

  useEffect(() => {
    const timerId = setInterval(refreshTimeOfDay, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [date]);

  return (
    <div className="App">
      <GlobalStyles />
      <SliderContainer>
        <ImageSlider timeOfDay={timeOfDay} />
      </SliderContainer>
      <MainScreen className="main">
        <Header>
          <Player />
          <Weather />
        </Header>
        <Main>
          <Clock date={date} />
          <CurrentDate date={date} />
          <Greeting timeOfDay={timeOfDay} />
        </Main>
        <Footer>
          <QuoteGenerator />
        </Footer>
      </MainScreen>
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
