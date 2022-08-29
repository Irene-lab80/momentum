import React, { useState } from 'react';
import DisplayWeather from './DisplayWeather';

import { Container, Input } from './styles';

const Weather = () => {
  const APIKEY = '31d9b62edfb8c214c2eabeef6f13b51c';
  const [form, setForm] = useState({
    city: ''
  });

  const [weather, setWeather] = useState({});

  async function weatherData(e: any) {
    e.preventDefault();

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&lang=ru&appid=${APIKEY}&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    setWeather({ data });
  }

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
      {weather.data ? <DisplayWeather data={weather} /> : null}
    </Container>
  );
};

export default Weather;
