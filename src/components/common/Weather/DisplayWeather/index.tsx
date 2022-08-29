import React from 'react';

import {
  Container, Description, Temperature, Wind, WeatherIcon, Row
} from './styles';

const DisplayWeather = ({ data }: any) =>
  // const iconurl = `http://openweathermap.org/img/wn/${data.data.weather[0].icon}.png`;
  // console.log(iconurl);
  // eslint-disable-next-line implicit-arrow-linebreak
  (
    <Container>
      {data.data !== {}
        ? (
          <>
            <Row>
              {/* <WeatherIcon src={iconurl} alt="weather icon" /> */}
              <Temperature>
                {`${Math.floor(data.data.main.temp)} °C`}
              </Temperature>
            </Row>
            <Description>{data.data.weather[0].description}</Description>
            <Wind>
              {`${Math.floor(data.data.wind.speed)} м/с`}
            </Wind>
          </>
        )
        : null}

    </Container>
  );
export default DisplayWeather;
