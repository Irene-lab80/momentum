import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DisplayWeather from './DisplayWeather';

import { Container, Input } from './styles';

const Weather = () => {
  const APIKEY = '31d9b62edfb8c214c2eabeef6f13b51c';

  // set query
  const [city, setCity] = useState(() => {
    const saved = localStorage.getItem('city') as string;
    const initialValue = JSON.parse(saved);
    return initialValue || '';
  });
  useEffect(() => {
    localStorage.setItem('city', JSON.stringify(city));
  }, [city]);

  // set weather
  const [weather, setWeather] = useState(() => {
    const saved = localStorage.getItem('weather') as any;
    const initialValue = JSON.parse(saved);
    return initialValue || {};
  });
  useEffect(() => {
    localStorage.setItem('weather', JSON.stringify(weather));
  }, [weather]);

  // get data from api
  const weatherData = async (e: any) => {
    e.preventDefault();
    let data = {};
    try {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&appid=${APIKEY}&units=metric`);
      data = await result.data;
      setWeather({ data });
    } catch (error) {
      console.log(error);
    }
  };

  // handle input
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'city') {
      setCity(value);
    }
  };

  return (
    <Container>
      <form onSubmit={weatherData}>
        <Input type="text" name="city" value={city} placeholder="City" onChange={(e) => handleChange(e)} />
      </form>
      {weather.data ? <DisplayWeather data={weather} /> : null}
    </Container>
  );
};

export default Weather;
