import React from 'react';

import {
  Container, Description, Temperature, Wind, WeatherIcon, Row
} from './styles';

const DisplayWeather = ({ data }: any) => (
  <Container>
    {data
      ? (
        <>
          <Row>
            <WeatherIcon src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}.png`} alt="weather icon" />
            <Temperature>
              {`${Math.floor(data.data.main.temp)} °C`}
            </Temperature>
          </Row>
          <Description>{data.data.weather[0].description}</Description>
          <Wind>
            {`${Math.floor(data.data.wind.speed)} m/s`}
          </Wind>
        </>
      )
      : null}
  </Container>
);
export default DisplayWeather;
