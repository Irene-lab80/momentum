import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Clock from './components/common/Clock';
import CurrentDate from './components/common/CurrentDate';
import Greeting from './components/common/Greeting';
import ImageSlider from './components/common/Slider';
import GlobalStyles from './styles/global';
import QuoteGenerator from './components/common/QuoteGenerator';
import {
  Footer, Header, Main, MainScreen, SliderContainer
} from './styles';

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

  return (
    <div className="App">
      <GlobalStyles />
      <SliderContainer>
        {/* <ImageSlider slides={imgArray} /> */}
        <ImageSlider />
      </SliderContainer>
      <MainScreen className="main">
        <Header />
        <Main>
          <Clock date={date} />
          <CurrentDate date={date} />
          <Greeting date={date} />
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
