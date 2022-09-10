import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow from '../../common/svg/Arrow';
import ArrowBackSVG from '../../common/svg/ArrowBackSVG';
import Weather from '../../common/Weather';
import DisplayHourlyWeather from '../../common/Weather/DisplayHourlyWeather';
import WeatherInput from '../../common/Weather/WeatherInput';
import { Container } from './styles';

const WeatherPage = () => {
  const APIKEY = '31d9b62edfb8c214c2eabeef6f13b51c';
  const [errorText, setErrorText] = useState('');
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
    const saved = localStorage.getItem('hourlyWeatherData') as any;
    const initialValue = JSON.parse(saved);
    return initialValue || null;
  });

  // get data from api
  const getWeatherData = async () => {
    let data = {};
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=${'en'}&appid=${APIKEY}&units=metric`);
      data = response.data;
      console.log(data);
      setWeatherData({ data });
    } catch (error) {
      setWeatherData(null);
      setErrorText('Nothing found');
      throw new Error('error');
    }
  };

  useEffect(() => {
    localStorage.setItem('hourlyWeatherData', JSON.stringify(weatherData));
  }, [weatherData]);

  // get weather every hour
  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <Container>
      <Link to="/">
        <ArrowBackSVG />
      </Link>
      <DisplayHourlyWeather data={weatherData} />
      <Weather />
    </Container>
  );
};

export default WeatherPage;
