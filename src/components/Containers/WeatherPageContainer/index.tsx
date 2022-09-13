import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SliderContainer from '../../common/SliderContainer';
import ArrowBackSVG from '../../common/svg/ArrowBackSVG';
import DisplayHourlyWeather from '../../common/Weather/DisplayHourlyWeather';
import { Screen, ArrowContainer } from './styles';

type WeatherPageType = {
  data: {data: {list: []}}
}

const WeatherPage = ({ data }: WeatherPageType) => (
  <>
    <SliderContainer />
    <Screen>
      <ArrowContainer>
        <Link to="/">
          <ArrowBackSVG />
        </Link>
      </ArrowContainer>
      <DisplayHourlyWeather data={data} />
    </Screen>
  </>
);

export default WeatherPage;
