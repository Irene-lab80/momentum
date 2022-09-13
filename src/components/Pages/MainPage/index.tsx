import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectTime, selectTimeOfDay, timeChange
} from '../../../store/timeSlice';
import {
  Footer, Header, Main, MainScreen
} from '../../../styles';
import Clock from '../../common/Clock';
import CurrentDate from '../../common/CurrentDate';
import Greeting from '../../common/Greeting';
import Player from '../../common/Player';
import QuoteGenerator from '../../common/QuoteGenerator';
import SliderContainer from '../../common/SliderContainer';
import Weather from '../../common/Weather';

type MainPageType = {
  time: any,
  tracks: any,
  timeOfDay: any
}
const MainPage = ({ time, tracks, timeOfDay }: MainPageType) => (
  <>
    <SliderContainer />
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
export default MainPage;
