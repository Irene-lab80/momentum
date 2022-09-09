import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Weather from '../../common/Weather';
import DisplayFullWeather from '../../common/Weather/DisplayFullWeather';
import WeatherInput from '../../common/Weather/WeatherInput';
import { Container } from './styles';

const WeatherPage = () => {
  const APIKEY = '31d9b62edfb8c214c2eabeef6f13b51c';
  const [errorText, setErrorText] = useState('');
  const [display, setDisplay] = useState('hidden');
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
  const [weatherData, setWeatherData] = useState(() => {
    const saved = localStorage.getItem('weatherData') as any;
    const initialValue = JSON.parse(saved);
    return initialValue || null;
  });

  // get data from api
  const getWeatherData = async () => {
    let data = {};
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=${'en'}&appid=${APIKEY}&units=metric`);
      data = response.data;
      console.log(data);
      setWeatherData({ data });
    } catch (error) {
      setWeatherData(null);
      setErrorText('Nothing found');
      throw new Error('error');
      // console.log(error);
    }
  };

  const weatherHandler = (e: any) => {
    e.preventDefault();
    getWeatherData();
  };

  useEffect(() => {
    localStorage.setItem('weatherData', JSON.stringify(weatherData));
    // getWeatherData();
  }, [weatherData]);

  useEffect(() => {
    getWeatherData();
  }, []);

  // handle input
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === 'city') {
      setCity(value);
    }
  };
  return (
    <Container>
      <WeatherInput weatherHandler={weatherHandler} city={city} handleChange={(e: any) => handleChange(e)} />
      <DisplayFullWeather data={weatherData} />
    </Container>
  );
};

export default WeatherPage;
