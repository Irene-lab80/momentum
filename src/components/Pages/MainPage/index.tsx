import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectTime, selectTimeOfDay, timeChange, timeOfDayChange
} from '../../../store/timeSlice';
import {
  Footer, Header, Main, MainScreen
} from '../../../styles';
import Clock from '../../common/Clock';
import CurrentDate from '../../common/CurrentDate';
import Greeting from '../../common/Greeting';
import Player from '../../common/Player';
import QuoteGenerator from '../../common/QuoteGenerator';
import SliderContainerComponent from '../../common/SliderContainerComponent';
import Weather from '../../common/Weather';

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

const MainPage = () => {
  // DATE
  const time = useSelector(selectTime);
  const timeOfDay = useSelector(selectTimeOfDay);
  const dispatch = useDispatch();

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch(timeChange(new Date().toString()));
    }, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [dispatch]);

  // time of day
  const getTimeOfDay = (hrs: number): 'night' | 'morning' | 'afternoon' | 'evening' | undefined | 'error' => {
    if (hrs < 6) return 'night';
    if (hrs >= 6 && hrs < 12) return 'morning';
    if (hrs >= 12 && hrs < 17) return 'afternoon';
    if (hrs >= 17 && hrs <= 23) return 'evening';
    return 'error';
  };

  useEffect(() => {
    const timerId = setInterval(() => dispatch(timeOfDayChange(getTimeOfDay(new Date(time).getHours()))), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [dispatch]);

  return (
    <>
      <SliderContainerComponent />
      <MainScreen className="main">
        <Header>
          <Player trackList={tracks} />
          <Weather />
        </Header>
        <Main>
          <Clock date={time} />
          <CurrentDate date={time} />
          <Greeting timeOfDay={timeOfDay} />
        </Main>
        <Footer>
          <QuoteGenerator />
        </Footer>
      </MainScreen>
    </>
  );
};
export default MainPage;
