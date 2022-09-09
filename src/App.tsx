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

const tracks = [
  {
    url: 'http://dl.dropboxusercontent.com/s/fwi7qd0enwtc7ye/leonell-cassio-the-blackest-bouquet-118766.mp3?dl=0',
    title: 'Leonell Cassio - The Blackest Bouquet',
  },
  {
    url: 'http://dl.dropboxusercontent.com/s/na0ix2kuk8w0chj/tuesday-glitch-soft-hip-hop-118327.mp3?dl=0',
    title: 'amaksi - Tuesday (Glitch Soft Hip-hop)',
  },
  {
    url: 'http://dl.dropboxusercontent.com/s/z2kwttn3vpoikf0/cinematic-time-lapse-115672.mp3?dl=0',
    title: 'Lexin Music - Cinematic Time Lapse',
  },
  {
    url: 'http://dl.dropboxusercontent.com/s/2n67ch270cshs10/order-99518.mp3?dl=0',
    title: 'ComaStudio - Order',
  },
];

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

  const hours = date.getHours();

  // time of day
  // eslint-disable-next-line consistent-return
  const getTimeOfDay = (hrs: number) => {
    if (hrs < 6) return 'night';
    if (hrs >= 6 && hrs < 12) return 'morning';
    if (hrs >= 12 && hrs <= 17) return 'afternoon';
    if (hrs >= 17 && hrs <= 24) return 'evening';
  };

  const [timeOfDay, setTimeOfDay] = useState(getTimeOfDay(hours));
  const showGreeting = () => {
    setTimeOfDay(timeOfDay);
  };

  useEffect(() => {
    const timeOfDayId = setInterval(showGreeting, 1000);
    return function cleanup() {
      clearInterval(timeOfDayId);
    };
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <SliderContainer>
        <ImageSlider timeOfDay={timeOfDay} />
      </SliderContainer>
      <MainScreen className="main">
        <Header>
          <Player trackList={tracks} />
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
        {/* <button type="button" onClick={imgAPI}>CLICK ME</button> */}
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
