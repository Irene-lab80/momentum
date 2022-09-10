import React from 'react';

import {
  Container, Description, Temperature, Wind, WeatherIcon, Row
} from './styles';

const DisplayWeather = ({ data }: any) => {
  const temperature = data.data.main.temp;
  const { humidity } = data.data.main;
  const windSpeed = data.data.wind.speed;
  const windDeg = data.data.wind.deg;
  const cityName = data.data.name;
  const countryName = data.data.sys.country;

  function getCardinalDirection(deg: number) {
    const directions = ['↑ N', '↗ NE', '→ E', '↘ SE', '↓ S', '↙ SW', '← W', '↖ NW'];
    return directions[Math.round(deg / 45) % 8];
  }

  const windDirection = getCardinalDirection(windDeg);

  return (
    <Container>
      <Row>
        {`Right now in ${cityName}, ${countryName}`}
      </Row>
      <Row>
        <WeatherIcon src={`http://openweathermap.org/img/wn/${data.data.weather[0].icon}.png`} alt="weather icon" />
        <Temperature>
          {`${Math.floor(temperature)} °C`}
        </Temperature>
      </Row>
      <Description>{data.data.weather[0].description}</Description>
      <Row>
        <Wind>
          {`${Math.floor(windSpeed)} m/s  ${windDirection}` }
        </Wind>
      </Row>
      <Row>
        {`humidity is ${humidity}%`}
      </Row>
    </Container>
  );
};
export default DisplayWeather;
