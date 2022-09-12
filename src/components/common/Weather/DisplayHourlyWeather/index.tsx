import React from 'react';

import {
  Container, Item
} from './styles';

const DisplayHourlyWeather = ({ data }: any) => (
  <Container>
    {data ? data.data.list.map((el: any) => (
      <Item key={el.dt}>
        <div>{new Date(el.dt * 1000).toLocaleDateString('en-En', { weekday: 'short' })}</div>
        <div>{new Date(el.dt * 1000).toLocaleDateString('en-En', { day: 'numeric' })}</div>
        <div>{new Date(el.dt * 1000).toLocaleDateString('en-En', { hour: 'numeric' }).split(',').pop()}</div>
        <img src={`http://openweathermap.org/img/wn/${el.weather[0].icon}.png`} alt="weather icon" />
        <h3>{el.main.temp > 0 ? `+${Math.floor(el.main.temp)}` : Math.floor(el.main.temp)}</h3>
        <div>{`${Math.floor(el.wind.speed)} m/s`}</div>
        <div>{`${el.main.humidity} %`}</div>
      </Item>
    )) : <>loading</>}
  </Container>
);
export default DisplayHourlyWeather;
