import axios from 'axios';
import React, { useState } from 'react';
import DisplayWeather from './DisplayWeather';

import { Container, Input } from './styles';

const Weather = () => {
  const APIKEY = '31d9b62edfb8c214c2eabeef6f13b51c';
  const [form, setForm] = useState({
    city: ''
  });

  const [weather, setWeather] = useState({});
  const [message, setMessage] = useState('');
  const weatherData = async (e: any) => {
    e.preventDefault();
    let data = {};
    try {
      const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${form.city}&lang=ru&appid=${APIKEY}&units=metric`);

      data = result.data;
      setWeather({ data });
      // console.log(data);
    } catch (error) {
      setMessage('nothing found');
      console.log(error);
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'city') {
      setForm({ ...form, city: value });
    }
  };

  return (
    <Container>
      <form onSubmit={weatherData}>
        <Input type="text" name="city" placeholder="City" onChange={(e) => handleChange(e)} />
      </form>
      {/* @ts-ignore */}
      {weather.data ? <DisplayWeather data={weather} /> : message}
    </Container>
  );
};

export default Weather;
